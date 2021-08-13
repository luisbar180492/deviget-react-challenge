import React from 'react'
import Paragraph from 'molecules/Paragraph'
import propTypes from 'prop-types'

const About = ({ paragraphs }) => {

  const renderContent = () => {
    return (
      paragraphs.map((props, index) => <Paragraph key={index} {...props} />)
    )
  }

  return (
    <div
      className='shadow-md flex flex-col items-center justify-center p-5 xl:w-1/2 mt-5 xl:mt-0 mr-0 xl:mr-5'
    >
      {renderContent()}
    </div>
  )
}

About.propTypes = {
  paragraphs: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      body: propTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default About