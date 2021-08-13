import React from 'react'
import { produce } from 'immer'
import { machineDefinition } from './index'
import { createMachine } from 'xstate'
import { createModel } from '@xstate/test'
import { render, cleanup, fireEvent } from 'root/jest.utils'
import Checkbox from 'atoms/Checkbox'
import actionTypes from 'stateMachines/atoms/checkbox/config/actionTypes'
import states from 'stateMachines/atoms/checkbox/config/states'

const getMachineDefinitionWithTests = () => {
  return produce(machineDefinition, (draft) => {
    draft.states[states.UNCHECKED].meta = {
        test: ({ getByTestId }) => {
        expect(getByTestId('checkbox-child-3')).toHaveClass('w-8 h-4 rounded-md duration-500 bg-gray-400')
      }
    }
    draft.states[states.CHECKED].meta = {
      test: ({ getByTestId }) => {
        expect(getByTestId('checkbox-child-3')).toHaveClass('w-8 h-4 rounded-md duration-500 bg-green-300')
        expect(getByTestId('checkbox-child-3.1')).toHaveClass('bg-white w-4 h-4 rounded-full duration-500 transform translate-x-full')
      }
    }
  })
}

const getEvents = () => ({
  TOGGLE: {
    exec: ({ getByTestId }) => {
      fireEvent.click(getByTestId('checkbox-container'))
    },
    cases: [{ action: actionTypes.CHANGE_THEME_MODE }]
  },
})

describe('checkbox', () => {

  const machine = createMachine(getMachineDefinitionWithTests())
  const machineModel = createModel(machine)
  .withEvents(getEvents())
  const testPlans = machineModel.getSimplePathPlans()

  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      afterEach(cleanup)

      plan.paths.forEach((path) => {
        it(path.description, () => {

          const rendered = render(<Checkbox
            label={'home.txt2'}
            action={actionTypes.CHANGE_THEME_MODE}
          />, { locale: 'en' })
   
          return path.test(rendered)
        })
      })
    })
  })

  describe('coverage', () => {
    it('should have full coverage', () => {
      machineModel.testCoverage()
    })
  })
})
