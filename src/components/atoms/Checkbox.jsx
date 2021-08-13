import React from 'react'
import { useActor } from '@xstate/react'
import { FormattedMessage } from 'react-intl'
import propTypes from 'prop-types'
import events from 'stateMachines/atoms/checkbox/events'

const Checkbox = ({ label, className, payload, machine }) => {
  const [state, send] = useActor(machine)

  const onClick = () => {
    send({
      payload,
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
        className='dark:text-pink-400'
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
        className={`w-8 h-4 rounded-md duration-500 ${state.value === 'checked' ? 'bg-pink-400' : 'bg-gray-400'}`}
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
  payload: propTypes.object.isRequired,
  className: propTypes.string,
  machine: propTypes.object.isRequired,
}

export default Checkbox