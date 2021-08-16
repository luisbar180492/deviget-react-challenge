import { assign } from '@xstate/immer'

const savePlayersInContext = assign((context, event) => {
  context.playerOne = event.payload.playerOne
  context.playerTwo = event.payload.playerTwo
})

export default savePlayersInContext