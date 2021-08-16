import { assign } from '@xstate/immer'

const removeErrorFromContext = assign((context, event) => context.error = undefined)

export default removeErrorFromContext