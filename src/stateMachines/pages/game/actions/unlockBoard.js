import { send } from 'xstate'
import children from 'stateMachines/pages/game/children'
import boardEvents from 'stateMachines/atoms/board/events'

const unlockBoard = send({type: boardEvents.UNLOCK}, { to: children.BOARD })

export default unlockBoard