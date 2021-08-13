import { createMachine, sendParent } from 'xstate'
import states from 'stateMachines/atoms/checkbox/states'
import events from 'stateMachines/atoms/checkbox/events'

export const machineDefinition = {
  id: 'checkbox',
  initial: states.UNCHECKED,
  states : {
    [states.UNCHECKED]: {
      on: {
        [events.TOGGLE]: [
          {
            actions: [sendParent((context, event) => ({
              type: event.payload.event,
            }))],
            target: states.CHECKED,
          },
        ],
      },
    },
    [states.CHECKED]: {
      on: {
        [events.TOGGLE]: [
          {
            actions: [sendParent((context, event) => ({
              type: event.payload.event,
            }))],
            target: states.UNCHECKED,
          },
        ],
      },
    },
  },
}

export default createMachine(machineDefinition)