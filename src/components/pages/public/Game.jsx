import React, { useEffect } from 'react'
import { useMachine } from '@xstate/react'
import machine from 'stateMachines/pages/game'
import events from 'stateMachines/pages/game/events'
import states from 'stateMachines/pages/game/states'
import HeaderAndBody from 'templates/HeaderAndBody'
import About from 'molecules/About'
import Board from 'atoms/Board'
import { useInternationalizationContext } from 'atoms/InternationalizationProvider'
import boardEvents from 'stateMachines/atoms/board/events'
import checkboxEvents from 'stateMachines/atoms/checkbox/events'

const Game = () => {
  const [gameState, send] = useMachine(machine, { devTools: true })
  const [language, setLanguage] = useInternationalizationContext()

  const onClick = (row, col, callback) => {
    const onAck = () => {
      send({
        type: boardEvents.LOCK
      })
      callback()
    }

    gameState.context.socket.send({ id: gameState.context.socket.id, row, col }, onAck)
  }

  const onChange = (event) => {
    setLanguage(event.target.value)
  }

  useEffect(() => {
    if (!gameState.context.socket) return

    const onFull = (data, ack) => {
      gameState.context.socket.disconnect(true)
    }

    const onAckMessage = (data, ack) => {
      ack()
      send({
        type: boardEvents.UNLOCK
      })
    }

    const onReady = (data, ack) => {
      send({
        type: events.PLAY,
        payload: {
          socketId: data.id,
        },
      })
    }

    gameState.context.socket.on('full', onFull)
    gameState.context.socket.on('message', onAckMessage)
    gameState.context.socket.on('ready', onReady)

    return () => {
      if (gameState.context.socket) {
        gameState.context.socket.removeListener('message')
        gameState.context.socket.removeListener('ready')
        gameState.context.socket.removeListener('full')
      }
    }
  }, [gameState])

  useEffect(() => {
    if (gameState.matches(states.PLAYING) && gameState.event.type === events.PLAY )
      send({
        type: gameState.event.payload.socketId === gameState.context.socket.id ? boardEvents.UNLOCK : boardEvents.LOCK
      })
  }, [gameState])
  
  return (
    <HeaderAndBody
      toolbar={{
        title: 'toolbar.txt1',
        checkbox: {
          label: 'toolbar.txt2',
          payload: {
            event: checkboxEvents.TOGGLE,
          },
          machine: gameState.children.checkbox,
        },
        dropdown: {
          value: language,
          onChange: onChange,
          options: [
            {
              key: 'en',
              value: 'game.txt11'
            },
            {
              key: 'es',
              value: 'game.txt12'
            },
          ],
        },
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
        machine={gameState.children.board}
        onClickCircle={onClick}
      />
    </HeaderAndBody>
  )
}

export default Game
