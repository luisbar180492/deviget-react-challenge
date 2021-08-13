import React from 'react'
import propTypes from 'prop-types'
import Text from 'atoms/Text'

const Paragraph = ({ title, body }) => {

  return (
    <div
      className='flex flex-col'
    >
      <Text
        className='my-2'
        as='md'
        text={title}
      />
      <Text
        as='md'
        text={body}
      />
    </div>
  )
}

Paragraph.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
}

export default Paragraph