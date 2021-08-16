import { assign } from '@xstate/immer'

const saveErrorInContext = assign((context, event) => context.error = { message: (event.data && event.data.message) || (event.error && event.error.message) })

export default saveErrorInContext