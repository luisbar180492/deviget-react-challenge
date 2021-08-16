import { assign } from '@xstate/immer'

const fillCircle = assign((context, event) => context.board[event.payload.row][event.payload.col] = event.payload.color)

export default fillCircle