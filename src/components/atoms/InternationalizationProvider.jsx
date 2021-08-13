import React, { createContext, useState, useContext } from 'react'
import { IntlProvider, } from 'react-intl'
import { getLanguage, getMessage, } from 'internationalization'
const InternationalizationContext = createContext([])

const InternationalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState(navigator.language.split(
    /[-_]/
  )[0])

  return (
    <InternationalizationContext.Provider
      value={[language, setLanguage]}
    >
      <IntlProvider locale={getLanguage(language)} messages={getMessage(language)}>
        {children}
      </IntlProvider>
    </InternationalizationContext.Provider>
  )
}

export default InternationalizationProvider
export const useInternationalizationContext = () => useContext(
  InternationalizationContext
)