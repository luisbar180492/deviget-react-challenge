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
import globalAlertEvents from 'stateMachines/molecules/globalAlert/events'
import { useGlobalAlertContext } from 'molecules/GlobalAlert'
import globalSpinnerEvents from 'stateMachines/atoms/globalSpinner/events'
import globalSpinnerStates from 'stateMachines/atoms/globalSpinner/states'
import { useGlobalSpinnerContext } from 'atoms/GlobalSpinner'

const Game = () => {
  const [state, send] = useMachine(machine, { devTools: true })
  const [language, setLanguage] = useInternationalizationContext()
  const [alertState, toggleAlert] = useGlobalAlertContext()
  const [spinnerState, toggleSpinner] = useGlobalSpinnerContext()

  const onClick = (row, col) => {
    if (row === -1) return send({
      type: events.SHOW_FULL_ERROR,
    })

    const onAck = () => {
      send({
        type: boardEvents.FILL_CIRCLE,
        payload: {
          row,
          col,
          color: state.context.socket.id === state.context.playerOne ? 'red' : 'blue',
        }
      })
      send({
        type: boardEvents.LOCK
      })
    }

    state.context.socket.send({ socketId: state.context.socket.id, row, col }, onAck)
  }

  const onChange = (event) => {
    setLanguage(event.target.value)
  }

  useEffect(() => {
    if (!state.context.socket) return

    const onFull = (data, ack) => {
      state.context.socket.disconnect(true)
    }

    const onAckMessage = ({ row, col, socketId }, ack) => {
      ack()
      send({
        type: boardEvents.UNLOCK
      })
      send({
        type: boardEvents.FILL_CIRCLE,
        payload: {
          row,
          col,
          color: socketId === state.context.playerOne ? 'red' : 'blue',
        }
      })
    }

    const onReady = ({ playerOne, playerTwo }, ack) => {
      send({
        type: events.PLAY,
        payload: {
          playerOne,
          playerTwo,
        },
      })
      send({
        type: playerOne === state.context.socket.id ? boardEvents.UNLOCK : boardEvents.LOCK
      })
    }

    state.context.socket.on('full', onFull)
    state.context.socket.on('message', onAckMessage)
    state.context.socket.on('ready', onReady)

    return () => {
      if (state.context.socket) {
        state.context.socket.removeListener('message')
        state.context.socket.removeListener('ready')
        state.context.socket.removeListener('full')
      }
    }
  }, [state])

  useEffect(() => {
    if (state.matches(states.FULL_ERROR))
      toggleAlert({ type: globalAlertEvents.TOGGLE, payload: { type: 'error', message: 'game.txt13' } })
    
    if (state.matches(states.ERROR))
      toggleAlert({ type: globalAlertEvents.TOGGLE, payload: { type: 'error', message: state.context.error.message } })
  }, [state.context.error])

  useEffect(() => {
    if (state.matches(states.FINISHED)) 
      toggleAlert({ type: globalAlertEvents.TOGGLE, payload: {
        type: 'success', message: state.event.payload.winner === 'red' ? 'game.txt14' : 'game.txt15' } 
      })
  }, [state])

  useEffect(() => {
    if (state.matches(states.WAITING) && spinnerState.matches(globalSpinnerStates.INVISIBLE))
      toggleSpinner({ type: globalSpinnerEvents.TOGGLE })
    if (state.matches(states.PLAYING) && spinnerState.matches(globalSpinnerStates.VISIBLE)) 
      toggleSpinner({ type: globalSpinnerEvents.TOGGLE })
  }, [state])
  
  return (
    <HeaderAndBody
      toolbar={{
        title: 'toolbar.txt1',
        checkbox: {
          label: 'toolbar.txt2',
          payload: {
            event: checkboxEvents.TOGGLE,
          },
          machine: state.children.checkbox,
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
        dark={state.context.dark}
        machine={state.children.board}
        onClickCircle={onClick}
      />
    </HeaderAndBody>
  )
}

export default Game
