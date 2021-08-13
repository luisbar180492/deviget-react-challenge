import React from 'react'
import { useMachine } from '@xstate/react'
import { FormattedMessage } from 'react-intl'
import propTypes from 'prop-types'
import machine from 'stateMachines/atoms/checkbox'
import events from 'stateMachines/atoms/checkbox/config/events'

const Checkbox = ({ label, className, action }) => {
  const [state, send] = useMachine(machine, { devTools: true })

  const onClick = () => {
    send({
      action,
      type: events.TOGGLE,
    })
  }
  
  return (
    <div
      data-testid='checkbox-container'
      className={`flex flex-col items-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      <span
        className='dark:text-green-300'
      >
        <FormattedMessage
          id={label}
        />
      </span>
      <input
        type='checkbox'
        className='w-0 h-0'
      />
      <div
        data-testid='checkbox-child-3'
        className={`w-8 h-4 rounded-md duration-500 ${state.value === 'checked' ? 'bg-green-300' : 'bg-gray-400'}`}
      >
        <div
          data-testid='checkbox-child-3.1'
          className={`bg-white w-4 h-4 rounded-full duration-500 ${state.value === 'checked' ? 'transform translate-x-full' : ''}`}
        />
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  label: propTypes.string.isRequired,
  action: propTypes.string.isRequired,
  className: propTypes.string,
}

export default Checkbox