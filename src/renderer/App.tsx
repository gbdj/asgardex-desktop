import React from 'react'

import { HashRouter as Router } from 'react-router-dom'

import { AppProvider } from './contexts/AppContext'
import { AvaxProvider } from './contexts/AvaxContext'
import { BinanceProvider } from './contexts/BinanceContext'
import { BitcoinCashProvider } from './contexts/BitcoinCashContext'
import { BitcoinProvider } from './contexts/BitcoinContext'
import { BscProvider } from './contexts/BscContext'
import { ChainProvider } from './contexts/ChainContext'
import { CosmosProvider } from './contexts/CosmosContext'
import { DogeProvider } from './contexts/DogeContext'
import { EthereumProvider } from './contexts/EthereumContext'
import { I18nProvider } from './contexts/I18nContext'
import { LitecoinProvider } from './contexts/LitecoinContext'
import { MidgardProvider } from './contexts/MidgardContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { ThorchainProvider } from './contexts/ThorchainContext'
import { ThorchainQueryProvider } from './contexts/ThorchainQueryContext'
import { UserNodesProvider } from './contexts/UserNodesContext'
import { WalletProvider } from './contexts/WalletContext'
import { AppView } from './views/app/AppView'

export const App: React.FC = (): JSX.Element => {
  return (
    <AppProvider>
      <WalletProvider>
        <ChainProvider>
          <ThorchainProvider>
            <BinanceProvider>
              <BitcoinProvider>
                <LitecoinProvider>
                  <BitcoinCashProvider>
                    <EthereumProvider>
                      <AvaxProvider>
                        <BscProvider>
                          <DogeProvider>
                            <CosmosProvider>
                              <MidgardProvider>
                                <ThorchainQueryProvider>
                                  <UserNodesProvider>
                                    <I18nProvider>
                                      <Router>
                                        <ThemeProvider>
                                          <AppView />
                                        </ThemeProvider>
                                      </Router>
                                    </I18nProvider>
                                  </UserNodesProvider>
                                </ThorchainQueryProvider>
                              </MidgardProvider>
                            </CosmosProvider>
                          </DogeProvider>
                        </BscProvider>
                      </AvaxProvider>
                    </EthereumProvider>
                  </BitcoinCashProvider>
                </LitecoinProvider>
              </BitcoinProvider>
            </BinanceProvider>
          </ThorchainProvider>
        </ChainProvider>
      </WalletProvider>
    </AppProvider>
  )
}
