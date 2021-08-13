import React from 'react'
import { useMachine } from '@xstate/react'
import machine from 'stateMachines/pages/game'
import events from 'stateMachines/pages/game/events'
import HeaderAndBody from 'templates/HeaderAndBody'
import Instructions from 'atoms/Instructions'

const Game = () => {
  const [gameState, send] = useMachine(machine, { devTools: true })

  return (
    <HeaderAndBody
      toolbar={{
        title: 'home.txt1',
        checkbox: {
          label: 'home.txt2',
          payload: {
            event: events.TOGGLE_THEME,
          },
          machine: gameState.children.checkbox
        } 
      }}
    >
      <Instructions />
    </HeaderAndBody>
  )
}

export default Game
