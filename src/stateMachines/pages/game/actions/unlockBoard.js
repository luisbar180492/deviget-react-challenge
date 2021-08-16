import { forwardTo } from 'xstate'
import children from 'stateMachines/pages/game/children'

const unlockBoard = forwardTo(children.BOARD)

export default unlockBoard