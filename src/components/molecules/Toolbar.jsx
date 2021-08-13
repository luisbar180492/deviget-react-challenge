import React from 'react'
import Text from 'atoms/Text'
import Checkbox from 'atoms/Checkbox'
import Dropdown from 'atoms/Dropdown'
import propTypes from 'prop-types'

const Toolbar = ({ title, checkbox, dropdown }) => {

  return (
    <div
      className='flex flex-row justify-between shadow-md'
    >
      <Text
        as='h4'
        className='p-5'
        text={title}
      />
      <div
        className='flex flex-row items-center'
      >
        <Dropdown
          {...dropdown}
        />
        <Checkbox
          className='p-5'
          {...checkbox}
        />
      </div>
    </div>
  )
}

Toolbar.propTypes = {
  title: propTypes.string.isRequired,
  checkbox: propTypes.shape({
    label: propTypes.string.isRequired,
    payload: propTypes.object.isRequired,
    machine: propTypes.object.isRequired,
  }).isRequired,
  dropdown: propTypes.shape({
    options: propTypes.arrayOf(
      propTypes.shape({
        key: propTypes.string.isRequired,
        value: propTypes.string.isRequired
      }).isRequired
    ).isRequired
  })
}

export default Toolbar