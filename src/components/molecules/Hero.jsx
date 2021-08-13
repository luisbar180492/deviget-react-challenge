import React from 'react'
import Image from 'atoms/Image'
import Text from 'atoms/Text'
import propTypes from 'prop-types'

const Hero = ({ background, title, className }) => {

  return (
    <div
      className={`${className}`}
    >
      <Image
        src={background}
      />
      <Text
        as='h1'
        text={title}
        className='absolute top-0'
      />
    </div>
  )
}

Hero.propTypes = {
  background: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  className: propTypes.string,
}

export default Hero