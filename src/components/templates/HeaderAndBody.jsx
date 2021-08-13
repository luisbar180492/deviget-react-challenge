import React from 'react'
import Checkbox from 'atoms/Checkbox'
import Hero from 'molecules/Hero'
import Cards from 'organisms/Cards'
import propTypes from 'prop-types'

const HeaderAndBody = ({ header, body }) => {

  return (
    <div
      className='max-h-full dark:bg-gray-800'
    >
      <Checkbox
        label={header.label}
        action={header.action}
        className='absolute right-2'

      />
      <Hero
        background={header.background}
        title={header.title}
        className='h-1/4'
      />
      <div
        className='flex flex-col h-3/4'
      >
        <Cards
          cards={body.cards}
        />
      </div>
    </div>
  )
}

HeaderAndBody.propTypes = {
  header: propTypes.shape({...Checkbox.propTypes, ...Hero.propTypes}).isRequired,
  body: propTypes.shape(Cards.propTypes).isRequired,
}

export default HeaderAndBody