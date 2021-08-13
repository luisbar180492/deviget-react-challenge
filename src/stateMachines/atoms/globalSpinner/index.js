import { Machine } from 'xstate'
import states from './config/states'
  
export default Machine({
  id: 'globalSpinner',
  initial: states.INVISIBLE,
  states : {
    invisible: {
      on: {
        TOGGLE: states.VISIBLE,
      },
    },
    visible: {
      on: {
        TOGGLE: states.INVISIBLE,
      },
    },
  },
})