import { createMachine } from 'xstate'
import states from 'stateMachines/atoms/board/states'
import events from 'stateMachines/atoms/board/events'
import fillCircle from 'stateMachines/atoms/board/actions/fillCircle'

export const machineDefinition = {
  id: 'board',
  initial: states.LOCKED,
  context: {
    board: [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
    ]
  },
  states : {
    [states.LOCKED]: {
      on: {
        [events.UNLOCK]: states.UNLOCKED,
        [events.LOCK]: states.LOCKED,
      },
    },
    [states.UNLOCKED]: {
      on: {
        [events.LOCK]: states.LOCKED,
        [events.UNLOCK]: states.UNLOCKED,
        [events.FILL_CIRCLE]: {
          actions: [fillCircle],
          target: states.UNLOCKED,
        },
      },
    },
  },
}

export default createMachine(machineDefinition)