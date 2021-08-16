import React, { createContext, useContext } from 'react'
import { useMachine } from  '@xstate/react'
import machine from 'stateMachines/molecules/globalAlert'
import propTypes from 'prop-types'
import Text from 'atoms/Text'

const colors = {
  error: 'bg-red-300',
  success: 'bg-red-300',
}

const GlobalAlert = ({ message, type }) => {
  
  return (
    <div
      className={`h-24 w-full ${colors[type]} fixed flex justify-center items-center`}
    >
      <Text
        as='h3'
        text={message}
      />
    </div>
  )
}

GlobalAlert.propTypes = {
  message: propTypes.string.isRequired,
  type: propTypes.oneOf(['error', 'success']),
}

const GlobalAlertContext = createContext([])
const GlobalAlertProvider = ({ children }) => {
  const [state, send] = useMachine(machine, { devTools: true })

  return (
    <GlobalAlertContext.Provider
      value={[ state, send, ]}
    >
      {
        state.matches('visible') && <GlobalAlert message={state.context.message} type={state.context.type} />
      }
      {children}
    </GlobalAlertContext.Provider>
  )
}

export default GlobalAlertProvider
export const useGlobalAlertContext = () => useContext(
  GlobalAlertContext
)