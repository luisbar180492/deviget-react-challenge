import React from 'react'
import Text from 'atoms/Text'
import propTypes from 'prop-types'

const Card = ({ title, body, className }) => {

  return (
    <div
      className={`rounded-md shadow-md max-w-sm m-3 p-8 hover:shadow-xl dark:bg-gray-700 ${className}`}
    >
      <Text
        as='h4'
        text={title}
        className='flex flex-row justify-center my-5'
      />
      <Text
        as='md'
        text={body}
        className='m-2'
      />
    </div>
  )
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  className: propTypes.string,
}

export default Card