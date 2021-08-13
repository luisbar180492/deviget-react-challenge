import { Machine } from 'xstate'
import states from './config/states'
import { fetchFeatures } from './actions'

export default Machine({
  id: 'home',
  initial: states.IDLE,
  context: {
    features: [],
  },
  states : {
    idle: {
      on: {
        LOAD: [
          {
            target: states.LOADING,
          },
        ],
      },
    },
    loading: {
      after: {
        3000: [
          {
            actions: [fetchFeatures],
            target: states.LOADED,
          },
        ],
      },
    },
    loaded: {},
  },
})