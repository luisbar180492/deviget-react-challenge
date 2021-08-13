import React from 'react'
import { useMachine } from '@xstate/react'
import machine from 'stateMachines/pages/board'
import events from 'stateMachines/pages/board/events'
import HeaderAndBody from 'templates/HeaderAndBody'
import Instructions from 'atoms/Instructions'

const Board = () => {
  const [boardState, send] = useMachine(machine, { devTools: true })

  return (
    <HeaderAndBody
      toolbar={{
        title: 'home.txt1',
        checkbox: {
          label: 'home.txt2',
          payload: {
            event: events.TOGGLE_THEME,
          },
          machine: boardState.children.checkbox
        } 
      }}
    >
      <Instructions />
    </HeaderAndBody>
  )
}

export default Board
