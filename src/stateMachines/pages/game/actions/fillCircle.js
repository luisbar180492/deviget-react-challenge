import { forwardTo } from 'xstate'
import children from 'stateMachines/pages/game/children'

const fillCircle = forwardTo(children.BOARD)

export default fillCircle