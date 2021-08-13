import React from 'react'
import Text from 'atoms/Text'
import Checkbox from 'atoms/Checkbox'
import propTypes from 'prop-types'

const Toolbar = ({ title, checkbox: { label, payload, machine } }) => {

  return (
    <div
      className='flex flex-row justify-between'
    >
      <Text
        as='h4'
        className='p-5'
        text={title}
      />
      <Checkbox
        className='p-5'
        label={label}
        payload={payload}
        machine={machine}
      />
    </div>
  )
}

Toolbar.propTypes = {
  title: propTypes.string.isRequired,
  checkbox: propTypes.shape({
    label: propTypes.string.isRequired,
    payload: propTypes.object.isRequired,
    machine: propTypes.object.isRequired,
  }).isRequired
}

export default Toolbar