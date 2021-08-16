import { forwardTo } from 'xstate'
import children from 'stateMachines/pages/game/children'

const lockBoard = forwardTo(children.BOARD)

export default lockBoard