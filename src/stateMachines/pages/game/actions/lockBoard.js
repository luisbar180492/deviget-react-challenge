import { send } from 'xstate'
import children from 'stateMachines/pages/game/children'
import boardEvents from 'stateMachines/atoms/board/events'

const lockBoard = send({type: boardEvents.LOCK}, { to: children.BOARD })

export default lockBoard