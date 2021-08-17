import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import { useActor } from '@xstate/react'
import states from 'stateMachines/atoms/board/states'
import events from 'stateMachines/atoms/board/events'

const x = [ '64', '192', '320', '448', '576', '704', '832' ]
const y = [ '64', '192', '320', '448', '576', '704' ]

const Board = ({ dark, machine, onClickCircle }) => {
  const [state, send] = useActor(machine)

  const checkIfSomeoneWins = () => {
    return [
      checkInRows(),
      checkInColumns(),
      checkInDiagonals(),
    ]
  }

  const checkInRows = () => {
    return state.context.board.some((row) => new RegExp(/red,red,red,red/).exec(row.join(',')) 
      ? 'red' 
      : new RegExp(/blue,blue,blue,blue/).exec(row.join(',') 
      ? 'blue' 
      : undefined
    ))
  }

  const checkInColumns = () => {
    for (let i = 0; i < state.context.board[0].length; i++) {
      const columValues = ''
      for (let j = 0; j < state.context.board.length; j++)
        columValues += state.context.board[j][i] + ','
      
      if (new RegExp(/red,red,red,red/).exec(columValues))
        return 'red'
      if (new RegExp(/blue,blue,blue,blue/).exec(columValues))
        return 'blue'
    }
    
    return undefined
  }

  const checkInDiagonals = () => {
    const diagonals = [
      [
        { row: 2, positive: 0, negative: 6 },
        { row: 3, positive: 1, negative: 5 },
        { row: 4, positive: 2, negative: 4 },
        { row: 5, positive: 3, negative: 3 },
      ],
      [
        { row: 1, positive: 0, negative: 6 },
        { row: 2, positive: 1, negative: 5 },
        { row: 3, positive: 2, negative: 4 },
        { row: 4, positive: 3, negative: 3 },
        { row: 5, positive: 4, negative: 2 },
      ],
      [
        { row: 0, positive: 0, negative: 6 },
        { row: 1, positive: 1, negative: 5 },
        { row: 2, positive: 2, negative: 4 },
        { row: 3, positive: 3, negative: 3 },
        { row: 4, positive: 4, negative: 2 },
        { row: 5, positive: 5, negative: 1 },
      ],
      [
        { row: 0, positive: 1, negative: 5 },
        { row: 1, positive: 2, negative: 4 },
        { row: 2, positive: 3, negative: 3 },
        { row: 3, positive: 4, negative: 2 },
        { row: 4, positive: 5, negative: 1 },
        { row: 5, positive: 6, negative: 0 },
      ],
      [
        { row: 0, positive: 2, negative: 4 },
        { row: 1, positive: 3, negative: 3 },
        { row: 2, positive: 4, negative: 3 },
        { row: 3, positive: 5, negative: 1 },
        { row: 4, positive: 6, negative: 0 },
      ],
      [
        { row: 0, positive: 3, negative: 3 },
        { row: 1, positive: 4, negative: 2 },
        { row: 2, positive: 5, negative: 1 },
        { row: 3, positive: 6, negative: 0 },
      ],
    ]

    for (let i = 0; i < diagonals.length; i++) {
      const positiveDiagonals = ''
      const negativeDiagonals = ''
      for (let j = 0; j < diagonals[i].length; j++) {
        positiveDiagonals += state.context.board[diagonals[i][j].row][diagonals[i][j].positive] + ','
        negativeDiagonals += state.context.board[diagonals[i][j].row][diagonals[i][j].negative] + ','
      }

      if (new RegExp(/red,red,red,red/).exec(positiveDiagonals) || new RegExp(/red,red,red,red/).exec(negativeDiagonals))
        return 'red'
      if (new RegExp(/blue,blue,blue,blue/).exec(positiveDiagonals) || new RegExp(/blue,blue,blue,blue/).exec(negativeDiagonals))
        return 'blue'
    }
    
    return undefined
  }

  const calculateWichRow = (col) => {
    for (let i = state.context.board.length -1; i >= 0; i--)
      if (!state.context.board[i][col]) return i

    return -1
  }

  const onClick = (row, col) => () => {
    onClickCircle(calculateWichRow(col), col)
  }

  useEffect(() => {
    const result = checkIfSomeoneWins()
    const winner = result.find(item => item)
    if (winner) send({ type: events.FINISH, payload: { winner } })
  }, [state.context.board])

  const renderCircles = () => {
    return y.map((y, row) => {
      return x.map((x, col) => {
        return (
          <circle
            className={`${state.matches(states.LOCKED) || state.matches(states.FINISHED) ? 'cursor-not-allowed' : 'cursor-pointer' }`}
            fill={state.context.board[row][col] || '#C4C4C4'}
            r='50'
            key={`${row},${col}`}
            cx={x}
            cy={y}
            onClick={state.matches(states.LOCKED) || state.matches(states.FINISHED) ? null : onClick(row, col)}
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