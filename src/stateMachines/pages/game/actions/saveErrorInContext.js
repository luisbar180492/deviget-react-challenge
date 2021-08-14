import { assign } from '@xstate/immer'

const saveErrorInContext = assign((context, event) => context.error = { message: event.data.message })

export default saveErrorInContext