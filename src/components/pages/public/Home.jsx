import React, { useEffect } from 'react'
import { useMachine } from '@xstate/react'
import { home } from 'stateMachines'
import HeaderAndBody from 'templates/HeaderAndBody'
import checkboxActions from 'stateMachines/atoms/checkbox/config/actionTypes'
import homeEvents from 'stateMachines/pages/home/config/events'
import homeActions from 'stateMachines/pages/home/config/actionTypes'
import homeStates from 'stateMachines/pages/home/config/states'
import { useGlobalSpinnerContext } from 'atoms/GlobalSpinner'

const Home = () => {
  const [homeState, send] = useMachine(home, { devTools: true })
  const [globalSpinnerState, toggleSpinner] = useGlobalSpinnerContext()

  useEffect(() => {
    send({
      type: homeEvents.LOAD,
      action: homeActions.FETCH_FEATURES,
    })
  }, [])

  useEffect(() => {
    if (homeState.value === homeStates.LOADING)
      toggleSpinner({ type: 'TOGGLE' })
    if (homeState.value === homeStates.LOADED)
      toggleSpinner({ type: 'TOGGLE' })
  }, [homeState])

  return (
    <HeaderAndBody
      header={{
        background: require('assets/images/music.png').default,
        title: 'home.txt1',
        label: 'home.txt2',
        action: checkboxActions.CHANGE_THEME_MODE,
      }}
      body={{
        cards: homeState.context.features,
      }}
    />
  )
}

export default Home
