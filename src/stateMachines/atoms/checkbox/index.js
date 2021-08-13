import { createMachine } from 'xstate'
import { shouldChangeThemeMode } from './guards'
import { changeThemeMode  } from './actions'
import states from './config/states'

export const machineDefinition = {
  id: 'checkbox',
  initial: states.UNCHECKED,
  states : {
    unchecked: {
      on: {
        TOGGLE: [
          {
            cond: shouldChangeThemeMode,
            actions: changeThemeMode,
            target: states.CHECKED,
          },
        ],
      },
    },
    checked: {
      on: {
        TOGGLE: [
          {
            cond: shouldChangeThemeMode,
            actions: changeThemeMode,
            target: states.UNCHECKED,
          },
        ],
      },
    },
  },
}

export default createMachine(machineDefinition)