import { Machine } from 'xstate'
import states from 'stateMachines/atoms/globalSpinner/states'
import events from 'stateMachines/atoms/globalSpinner/events'
  
export default Machine({
  id: 'globalSpinner',
  initial: states.INVISIBLE,
  states : {
    [states.INVISIBLE]: {
      on: {
        [events.TOGGLE]: states.VISIBLE,
      },
    },
    [states.VISIBLE]: {
      on: {
        [events.TOGGLE]: states.INVISIBLE,
      },
    },
  },
})