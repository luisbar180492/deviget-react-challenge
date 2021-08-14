import { Machine } from 'xstate'
import states from 'stateMachines/pages/game/states'
import children from 'stateMachines/pages/game/children'
import events from 'stateMachines/pages/game/events'
import toggleTheme from 'stateMachines/pages/game/actions/toggleTheme'
import connect from 'stateMachines/pages/game/services/connect'
import checkboxMachine from 'stateMachines/atoms/checkbox'

export default Machine({
  id: 'game',
  initial: states.IDLE,
  context: {
    dark: false,
    error: undefined,
    socket: undefined,
  },
  invoke: {
    id: children.CHECKBOX,
    src: checkboxMachine,
  },
  states : {
    [states.IDLE]: {
      invoke: {
        src: connect.src,
        onDone: connect.onDone,
        onError: connect.onError,
      },
      on: {
        [events.TOGGLE_THEME]: {
          actions: [toggleTheme],
          target: states.IDLE,
        },
      }
    },
    [states.WAITING]: {
      on: {
        [events.TOGGLE_THEME]: {
          actions: [toggleTheme],
          target: states.WAITING,
        },
        [events.UNLOCK]: {
          target: states.UNLOCKED,
        },
        [events.LOCK]: {
          target: states.LOCKED,
        },
      }
    },
    [states.LOCKED]: {
      on: {
        [events.TOGGLE_THEME]: {
          actions: [toggleTheme],
          target: states.LOCKED,
        },
        [events.UNLOCK]: {
          target: states.UNLOCKED,
        },
      }
    },
    [states.UNLOCKED]: {
      on: {
        [events.TOGGLE_THEME]: {
          actions: [toggleTheme],
          target: states.UNLOCKED,
        },
        [events.LOCK]: {
          target: states.LOCKED,
        },
      }
    },
    [states.ERROR]: {
      on: {
        [events.TOGGLE_THEME]: {
          actions: [toggleTheme],
          target: states.ERROR,
        }
      }
    }
  },
})