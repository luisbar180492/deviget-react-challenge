import { inspect  } from '@xstate/inspect'
import React, { Suspense, } from 'react'
import ReactDOM from 'react-dom'
import { Router, View, NotFoundBoundary, } from 'react-navi'
import { IntlProvider, } from 'react-intl'
import HelmetProvider from 'react-navi-helmet-async'
import getRoutes from './routes'
import NotFound from 'pages/public/NotFound'
import Splash from 'pages/public/Splash'
import SpinnerProvider from 'atoms/GlobalSpinner'
import { getLanguage, getMessage, } from './internationalization'
import 'styles/main.scss'

inspect({
  iframe: false,
})

const rootElement = document.getElementById(
  'root'
)

getRoutes().then(
  (
    routes
  ) => {
    ReactDOM.render(
      <SpinnerProvider>
        <IntlProvider locale={getLanguage()} messages={getMessage()}>
          <Suspense fallback={<Splash />}>
            <HelmetProvider>
              <Router routes={routes}>
                <NotFoundBoundary render={() => <NotFound />}>
                  <View />
                </NotFoundBoundary>
              </Router>
            </HelmetProvider>
          </Suspense>
        </IntlProvider>
      </SpinnerProvider>,
      rootElement,
    )
  },
)
