import React from 'react'
import propTypes from 'prop-types'
import { useActor } from '@xstate/react'
import states from 'stateMachines/atoms/board/states'

const x = [ '64', '192', '320', '448', '576', '704', '832' ]
const y = [ '64', '192', '320', '448', '576', '704' ]

const Board = ({ dark, machine, onClickCircle }) => {
  const [state, send] = useActor(machine)

  const calculateWichRow = (col) => {
    for (let i = state.context.board.length -1; i >= 0; i--)
      if (!state.context.board[i][col]) return i

    return -1
  }

  const onClick = (row, col) => () => {
    onClickCircle(calculateWichRow(col), col)
  }

  const renderCircles = () => {
    return y.map((y, row) => {
      return x.map((x, col) => {
        return (
          <circle
            className={`${ state.matches(states.LOCKED) ? 'cursor-not-allowed' : 'cursor-pointer' }`}
            fill={state.context.board[row][col] || '#C4C4C4'}
            r='50'
            key={`${row},${col}`}
            cx={x}
            cy={y}
            onClick={state.matches(states.LOCKED) ? null : onClick(row, col)}
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
  machine: propTypes.object.isRequired,
  onClickCircle: propTypes.func.isRequired,
}

export default Board