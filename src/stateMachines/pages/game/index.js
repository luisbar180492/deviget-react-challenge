import { createMachine } from 'xstate'
import states from 'stateMachines/pages/game/states'
import children from 'stateMachines/pages/game/children'
import events from 'stateMachines/pages/game/events'
import toggleTheme from 'stateMachines/pages/game/actions/toggleTheme'
import connect from 'stateMachines/pages/game/services/connect'
import checkboxMachine from 'stateMachines/atoms/checkbox'
import boardMachine from 'stateMachines/atoms/board'
import lockBoard from 'stateMachines/pages/game/actions/lockBoard'
import unlockBoard from 'stateMachines/pages/game/actions/unlockBoard'
import boardEvents from 'stateMachines/atoms/board/events'
import checkboxEvents from 'stateMachines/atoms/checkbox/events'
import fillCircle from 'stateMachines/pages/game/actions/fillCircle'
import savePlayersInContext from 'stateMachines/pages/game/actions/savePlayersInContext'
import saveErrorInContext from 'stateMachines/pages/game/actions/saveErrorInContext'
import removeErrorFromContext from 'stateMachines/pages/game/actions/removeErrorFromContext'

export const machineDefinition = {
  id: 'game',
  initial: states.IDLE,
  context: {
    dark: false,
    playerOne: undefined,
    playerTwo: undefined,
    error: undefined,
    socket: undefined,
  },
  invoke: [
    {
      id: children.CHECKBOX,
      src: checkboxMachine,
    },
    {
      id: children.BOARD,
      src: boardMachine,
    },
  ],
  states : {
    [states.IDLE]: {
      invoke: {
        src: connect.src,
        onDone: connect.onDone,
        onError: connect.onError,
      },
      on: {
        [checkboxEvents.TOGGLE]: {
          actions: [...toggleTheme],
          target: states.IDLE,
        },
      },
    },
    [states.WAITING]: {
      on: {
        [checkboxEvents.TOGGLE]: {
          actions: [...toggleTheme],
          target: states.WAITING,
        },
        [events.PLAY]: {
          actions:[savePlayersInContext],
          target: states.PLAYING,
        },
      },
    },
    [states.PLAYING]: {
      on: {
        [checkboxEvents.TOGGLE]: {
          actions: [...toggleTheme],
          target: states.PLAYING,
        },
        [events.FINISH]: {
          target: states.FINISHED,
        },
        [boardEvents.LOCK]: {
          actions: [lockBoard],
          target: states.PLAYING,
        },
        [boardEvents.UNLOCK]: {
          actions: [unlockBoard],
          target: states.PLAYING,
        },
        [boardEvents.FILL_CIRCLE]: {
          actions: [fillCircle],
          target: states.PLAYING,
        },
        [events.SHOW_FULL_ERROR]: {
          actions: [saveErrorInContext],
          target: states.FULL_ERROR,
        },
      },
    },
    [states.FINISHED]: {
      on: {
        [checkboxEvents.TOGGLE]: {
          actions: [...toggleTheme],
          target: states.FINISHED,
        },
        [events.PLAY]: {
          target: states.PLAYING,
        },
      },
    },
    [states.FULL_ERROR]: {
      after: {
        100: {
          actions: [removeErrorFromContext],
          target: states.PLAYING,
        }
      }
    },
    [states.ERROR]: {
      on: {
        [checkboxEvents.TOGGLE]: {
          actions: [...toggleTheme],
          target: states.ERROR,
        },
      },
    },
  },
}

export default createMachine(machineDefinition)