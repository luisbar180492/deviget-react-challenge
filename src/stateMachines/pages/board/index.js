import { Machine } from 'xstate'
import states from 'stateMachines/pages/board/states'
import children from 'stateMachines/pages/board/children'
import events from 'stateMachines/pages/board/events'
import checkboxMachine from 'stateMachines/atoms/checkbox'

export default Machine({
  id: 'board',
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