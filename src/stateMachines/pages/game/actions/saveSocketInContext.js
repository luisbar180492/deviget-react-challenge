import { assign } from '@xstate/immer'

const saveSocketInContext = assign((context, event) => context.socket = event.data)

export default saveSocketInContext