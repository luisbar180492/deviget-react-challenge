import { Machine, assign } from 'xstate'
import states from 'stateMachines/pages/game/states'
import children from 'stateMachines/pages/game/children'
import events from 'stateMachines/pages/game/events'
import checkboxMachine from 'stateMachines/atoms/checkbox'

export default Machine({
  id: 'game',
  initial: states.WAITING,
  context: {
    dark: false,
  },
  invoke: {
    id: children.CHECKBOX,
    src: checkboxMachine,
  },
  states : {
    [states.WAITING]: {
      on: {
        [events.TOGGLE_THEME]: {
          actions: [() => document.documentElement.classList.toggle('dark'), assign((context) => context.dark = !context.dark)],
          target: states.WAITING,
        }
      }
    }
  },
})