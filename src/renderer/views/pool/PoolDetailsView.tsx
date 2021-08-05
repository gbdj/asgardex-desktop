import React, { useCallback, useEffect, useMemo, useRef } from 'react'

import * as RD from '@devexperts/remote-data-ts'
import { assetFromString, Chain } from '@xchainjs/xchain-util'
import * as FP from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import { useObservableState } from 'observable-hooks'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import * as RxOp from 'rxjs/operators'

import { PoolDetails, Props as PoolDetailProps } from '../../components/pool/PoolDetails'
import { getEmptyPoolDetail, getEmptyPoolStatsDetail } from '../../components/pool/PoolDetails.helpers'
import { ErrorView } from '../../components/shared/error'
import { RefreshButton } from '../../components/uielements/button'
import { ONE_BN } from '../../const'
import { useAppContext } from '../../contexts/AppContext'
import { useMidgardContext } from '../../contexts/MidgardContext'
import * as PoolHelpers from '../../helpers/poolHelper'
import { useMimirHalt } from '../../hooks/useMimirHalt'
import { PoolDetailRouteParams } from '../../routes/pools/detail'
import { DEFAULT_NETWORK } from '../../services/const'
import { PoolDetailRD, PoolEarningHistoryRD, PoolStatsDetailRD } from '../../services/midgard/types'
import { PoolChartView } from './PoolChartView'
import * as Styled from './PoolDetailsView.styles'
import { PoolHistory } from './PoolHistoryView'

type TargetPoolDetailProps = Omit<PoolDetailProps, 'asset'>

const defaultDetailsProps: TargetPoolDetailProps = {
  priceRatio: ONE_BN,
  HistoryView: PoolHistory,
  ChartView: PoolChartView,
  poolDetail: getEmptyPoolDetail(),
  poolStatsDetail: getEmptyPoolStatsDetail(),
  earningsHistory: O.none,
  network: DEFAULT_NETWORK,
  disableAllPoolActions: false,
  disableTradingPoolAction: false
}

export const PoolDetailsView: React.FC = () => {
  const { network$ } = useAppContext()
  const {
    service: {
      pools: {
        selectedPoolDetail$,
        priceRatio$,
        selectedPricePoolAssetSymbol$,
        poolStatsDetail$,
        poolEarningHistory$,
        reloadSelectedPoolDetail,
        haltedChains$
      },
      poolActionsHistory: { reloadActionsHistory, actions$ },
      setSelectedPoolAsset
    }
  } = useMidgardContext()

  const network = useObservableState(network$, DEFAULT_NETWORK)

  const intl = useIntl()

  const { asset } = useParams<PoolDetailRouteParams>()

  const [haltedChains] = useObservableState(() => FP.pipe(haltedChains$, RxOp.map(RD.getOrElse((): Chain[] => []))), [])
  const { mimirHalt } = useMimirHalt()

  const getDisableAllPoolActions = useCallback(
    (chain: Chain) => PoolHelpers.disableAllActions({ chain, haltedChains, mimirHalt }),
    [haltedChains, mimirHalt]
  )
  const getDisableTradingPoolAction = useCallback(
    (chain: Chain) => PoolHelpers.disableTradingActions({ chain, haltedChains, mimirHalt }),
    [haltedChains, mimirHalt]
  )

  const oRouteAsset = useMemo(() => O.fromNullable(assetFromString(asset.toUpperCase())), [asset])

  // Set selected pool asset whenever an asset in route has been changed
  // Needed to get all data for this pool (pool details etc.)
  useEffect(() => {
    setSelectedPoolAsset(oRouteAsset)
    // Reset selectedPoolAsset on view's unmount to avoid effects with depending streams
    return () => {
      setSelectedPoolAsset(O.none)
    }
  }, [oRouteAsset, setSelectedPoolAsset])

  const priceSymbol = useObservableState(selectedPricePoolAssetSymbol$, O.none)

  const priceRatio = useObservableState(priceRatio$, ONE_BN)

  const [isHistoryLoading] = useObservableState(() => FP.pipe(actions$, RxOp.map(RD.isPending)), false)

  const poolDetailRD: PoolDetailRD = useObservableState(selectedPoolDetail$, RD.initial)

  const poolStatsDetailRD: PoolStatsDetailRD = useObservableState(poolStatsDetail$, RD.initial)
  const poolEarningHistoryRD: PoolEarningHistoryRD = useObservableState(poolEarningHistory$, RD.initial)

  const onRefreshData = useCallback(() => {
    reloadSelectedPoolDetail()
    reloadActionsHistory()
  }, [reloadSelectedPoolDetail, reloadActionsHistory])

  const refreshButtonDisabled = useMemo(() => {
    return isHistoryLoading || FP.pipe(poolDetailRD, RD.isPending)
  }, [isHistoryLoading, poolDetailRD])

  const prevProps = useRef<TargetPoolDetailProps>(defaultDetailsProps)

  return (
    <>
      <Styled.ControlsContainer>
        <Styled.BackLink />
        <RefreshButton clickHandler={onRefreshData} disabled={refreshButtonDisabled} />
      </Styled.ControlsContainer>
      {FP.pipe(
        oRouteAsset,
        O.fold(
          () => <ErrorView title={intl.formatMessage({ id: 'routes.invalid.asset' }, { asset })} />,
          (asset) =>
            FP.pipe(
              RD.combine(poolDetailRD, poolStatsDetailRD, poolEarningHistoryRD),
              RD.fold(
                () => <PoolDetails asset={asset} {...defaultDetailsProps} />,
                () => <PoolDetails asset={asset} {...prevProps.current} isLoading />,
                ({ message }: Error) => {
                  return <ErrorView title={message} />
                },
                ([poolDetail, poolStatsDetail, poolEarningHistory]) => {
                  prevProps.current = {
                    network,
                    priceRatio,
                    poolDetail,
                    poolStatsDetail,
                    earningsHistory: poolEarningHistory,
                    priceSymbol: O.toUndefined(priceSymbol),
                    HistoryView: PoolHistory,
                    ChartView: PoolChartView,
                    disableAllPoolActions: getDisableAllPoolActions(asset.chain),
                    disableTradingPoolAction: getDisableTradingPoolAction(asset.chain)
                  }

                  return <PoolDetails asset={asset} {...prevProps.current} />
                }
              )
            )
        )
      )}
    </>
  )
}
