import React from 'react'
import { useMachine } from '@xstate/react'
import machine from 'stateMachines/pages/game'
import events from 'stateMachines/pages/game/events'
import HeaderAndBody from 'templates/HeaderAndBody'
import About from 'molecules/About'
import Board from 'atoms/Board'

const Game = () => {
  const [gameState, send] = useMachine(machine, { devTools: true })

  const onClick = (row, col) => {
    console.log('onClick', row, col);
  }
  
  return (
    <HeaderAndBody
      toolbar={{
        title: 'toolbar.txt1',
        checkbox: {
          label: 'toolbar.txt2',
          payload: {
            event: events.TOGGLE_THEME,
          },
          machine: gameState.children.checkbox
        } 
      }}
    >
      <About
        paragraphs={[
          {
            title: 'game.txt1',
            body: 'game.txt2',
          },
          {
            title: 'game.txt3',
            body: 'game.txt4',
          },
          {
            title: 'game.txt5',
            body: 'game.txt6',
          },
          {
            title: 'game.txt7',
            body: 'game.txt8',
          },
          {
            title: 'game.txt9',
            body: 'game.txt10',
          },
        ]}
      />
      <Board
        dark={gameState.context.dark}
        onClick={onClick}
      />
    </HeaderAndBody>
  )
}

export default Game
