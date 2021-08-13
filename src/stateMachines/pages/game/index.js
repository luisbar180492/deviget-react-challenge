import { Machine } from 'xstate'
import states from 'stateMachines/pages/game/states'
import children from 'stateMachines/pages/game/children'
import events from 'stateMachines/pages/game/events'
import checkboxMachine from 'stateMachines/atoms/checkbox'

export default Machine({
  id: 'game',
  initial: states.WAITING,
  context: {
    features: [],
  },
  invoke: {
    id: children.CHECKBOX,
    src: checkboxMachine,
  },
  states : {
    [states.WAITING]: {
      on: {
        [events.TOGGLE_THEME]: {
          actions: [() => document.documentElement.classList.toggle('dark')],
          target: states.WAITING,
        }
      }
    }
  },
})