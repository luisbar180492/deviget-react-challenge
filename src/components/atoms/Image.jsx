import React from 'react'
import propTypes from 'prop-types'

const Image = ({ src, className }) => {

  return (
    <img
      className={`object-cover h-full w-full ${className}`}
      src={src}
    />
  )
}

Image.propTypes = {
  src: propTypes.string.isRequired,
  className: propTypes.string,
}

export default Image