import { createMachine, assign } from 'xstate'
import states from 'stateMachines/atoms/globalAlert/states'
import events from 'stateMachines/atoms/globalAlert/events'

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
          actions: assign((context, event) => {
            context.type = event.data.type
            context.message = event.data.message
          })
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