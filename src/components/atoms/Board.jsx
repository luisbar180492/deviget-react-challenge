import React from 'react'
import propTypes from 'prop-types'

const x = [ '64', '192', '320', '448', '576', '704', '832' ]
const y = [ '64', '192', '320', '448', '576', '704' ]

const Board = ({ dark, onClick, locked }) => {

  const onClickCircle = (row, col) => () => {
    onClick(row, col)
  }

  const renderCircles = () => {
    return y.map((y, row) => {
      return x.map((x, col) => {
        return (
          <circle
            className={`${ locked ? 'cursor-not-allowed' : 'cursor-pointer' }`}
            fill='#C4C4C4'
            r='50'
            key={`${row},${col}`}
            cx={x}
            cy={y}
            onClick={locked ? null : onClickCircle(row, col)}
          />
        )
      })
    })
  }

  return (
    <div
      className='flex justify-center'
    >
      <svg
        width='700'
        height='600'
        viewBox='0 0 896 768'
      >
        <rect
          width='896'
          height='768'
          rx='29'
          fill={dark ? '#FFFFFF' : '#27272A'}
        />
        {renderCircles()}
      </svg>
    </div>
  )
}

Board.propTypes = {
  dark: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
  locked: propTypes.bool.isRequired,
}

export default Board