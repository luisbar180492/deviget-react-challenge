import React, { createContext, useContext } from 'react'
import { useMachine } from  '@xstate/react'
import machine from 'stateMachines/atoms/globalSpinner'

const GlobalSpinner = () => {
  
  return (
    <div
      className='h-0.5 w-1/4 move-horizontal bg-violet-500 fixed'
    />
  )
}

const GlobalSpinnerContext = createContext([])
const GlobalSpinnerProvider = ({ children }) => {
  const [state, send] = useMachine(machine, { devTools: true })

  return (
    <GlobalSpinnerContext.Provider
      value={[ state, send, ]}
    >
      {
        state.matches('visible') && <GlobalSpinner />
      }
      {children}
    </GlobalSpinnerContext.Provider>
  )
}

export default GlobalSpinnerProvider
export const useGlobalSpinnerContext = () => useContext(
  GlobalSpinnerContext
)