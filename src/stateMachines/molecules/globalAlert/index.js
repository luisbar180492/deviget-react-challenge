import { createMachine } from 'xstate'
import states from 'stateMachines/molecules/globalAlert/states'
import events from 'stateMachines/molecules/globalAlert/events'
import saveErrorInContext from 'stateMachines/molecules/globalAlert/actions/saveErrorInContext'

export const machineDefinition = {
  id: 'globalAlert',
  initial: states.INVISIBLE,
  context: {
    type: undefined,
    message: undefined,
  },
  states : {
    [states.INVISIBLE]: {
      on: {
        [events.TOGGLE]: {
          target: states.VISIBLE,
          actions: [saveErrorInContext]
        },
      },
    },
    [states.VISIBLE]: {
      after: {
        3000: [
          {
            target: states.INVISIBLE,
          },
        ],
      },
    },
  },
}

export default createMachine(machineDefinition)