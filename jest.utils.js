import React from 'react'
import { IntlProvider, } from 'react-intl'
import HelmetProvider from 'react-navi-helmet-async'
import SpinnerProvider from 'atoms/GlobalSpinner'
import { getMessage, } from 'internationalization/index.js'
import { render as originalRender } from '@testing-library/react'

const render = (ui, { locale = 'es', ...renderOptions } = {}) => {
  
  const Wrapper = ({ children }) => {
    return (
      <SpinnerProvider>
        <IntlProvider locale={locale} messages={getMessage()}>
          <HelmetProvider>
            {children}
          </HelmetProvider>
        </IntlProvider>
      </SpinnerProvider>
    )
  }

  return originalRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { render }
