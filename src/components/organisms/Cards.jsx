import React from 'react'
import Card from 'molecules/Card'
import propTypes from 'prop-types'

const Cards = ({ cards, className }) => {

  return (
    <div
      className={`flex flex-row flex-wrap justify-center overflow-scroll ${className}`}
    >
      {
        cards.map((card) => {

          return (
            <Card
              key={card.title}
              title={card.title}
              body={card.body}
            />
          )
        })
      }
    </div>
  )
}

Cards.propTypes = {
  cards: propTypes.arrayOf(propTypes.objectOf(Card)),
  className: propTypes.string,
}

export default Cards