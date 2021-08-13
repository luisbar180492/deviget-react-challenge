import React from 'react'
import propTypes from 'prop-types'
import Toolbar from 'molecules/Toolbar'

const HeaderAndBody = ({ toolbar, children }) => {

  return (
    <div
      className='min-h-full dark:bg-gray-800'
    >
      <Toolbar
        {...toolbar}
      />
      <div
        className='flex flex-col-reverse justify-around items-center xl:flex-row p-5'
      >
        {children}
      </div>
    </div>
  )
}

HeaderAndBody.propTypes = {
  toolbar: propTypes.shape({
    title: propTypes.string.isRequired,
    checkbox: propTypes.shape({
      label: propTypes.string.isRequired,
      payload: propTypes.object.isRequired,
      machine: propTypes.object.isRequired,
    }).isRequired
  })
}

export default HeaderAndBody