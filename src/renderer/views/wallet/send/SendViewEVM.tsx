import React, { useMemo } from 'react'

import * as RD from '@devexperts/remote-data-ts'
// import { ETHChain } from '@xchainjs/xchain-ethereum'
import { baseAmount } from '@xchainjs/xchain-util'
import * as FP from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import { useObservableState } from 'observable-hooks'

import { ETHAddress } from '../../../../shared/ethereum/const'
import { LoadingView } from '../../../components/shared/loading'
import { SendFormEVM } from '../../../components/wallet/txs/send'
import { useChainContext } from '../../../contexts/ChainContext'
import { useEvmContext } from '../../../contexts/EvmContext'
import { useThorchainQueryContext } from '../../../contexts/ThorchainQueryContext'
import { useWalletContext } from '../../../contexts/WalletContext'
import { getWalletBalanceByAddressAndAsset } from '../../../helpers/walletHelper'
import { useNetwork } from '../../../hooks/useNetwork'
import { useOpenExplorerTxUrl } from '../../../hooks/useOpenExplorerTxUrl'
import { FeesRD, WalletBalances } from '../../../services/clients'
import { DEFAULT_BALANCES_FILTER, INITIAL_BALANCES_STATE } from '../../../services/wallet/const'
import { SelectedWalletAsset } from '../../../services/wallet/types'
import * as Styled from '../Interact/InteractView.styles'

type Props = {
  asset: SelectedWalletAsset
}

export const SendViewEVM: React.FC<Props> = (props): JSX.Element => {
  const { asset } = props

  const { network } = useNetwork()

  const {
    balancesState$,
    keystoreService: { validatePassword$ }
  } = useWalletContext()

  const [{ balances: oBalances }] = useObservableState(
    () => balancesState$(DEFAULT_BALANCES_FILTER),
    INITIAL_BALANCES_STATE
  )

  const { openExplorerTxUrl, getExplorerTxUrl } = useOpenExplorerTxUrl(O.some(asset.asset.chain))

  const oWalletBalance = useMemo(
    () =>
      FP.pipe(
        oBalances,
        O.chain((balances) =>
          getWalletBalanceByAddressAndAsset({ balances, address: asset.walletAddress, asset: asset.asset })
        )
      ),
    [asset, oBalances]
  )
  const { thorchainQuery } = useThorchainQueryContext()
  const { transfer$ } = useChainContext()

  const { fees$, reloadFees } = useEvmContext(asset.asset.chain)

  const [feesRD] = useObservableState<FeesRD>(
    // First fees are based on "default" values
    // Whenever an user enters valid values into input fields,
    // `reloadFees` will be called and with it, `feesRD` will be updated with fees
    () => {
      return fees$({
        asset: asset.asset,
        amount: baseAmount(1),
        recipient: ETHAddress
      })
    },
    RD.initial
  )

  return FP.pipe(
    oWalletBalance,
    O.fold(
      () => <LoadingView size="large" />,
      (walletBalance) => (
        <Styled.Container>
          <SendFormEVM
            asset={asset}
            balance={walletBalance}
            balances={FP.pipe(
              oBalances,
              O.getOrElse<WalletBalances>(() => [])
            )}
            fees={feesRD}
            transfer$={transfer$}
            openExplorerTxUrl={openExplorerTxUrl}
            getExplorerTxUrl={getExplorerTxUrl}
            reloadFeesHandler={reloadFees}
            validatePassword$={validatePassword$}
            thorchainQuery={thorchainQuery}
            network={network}
          />
        </Styled.Container>
      )
    )
  )
}
