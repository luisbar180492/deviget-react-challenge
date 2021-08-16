import { assign } from 'xstate'

const saveErrorInContext = assign((context, event) => {
  context.type = (event.data && event.data.type) || (event.payload && event.payload.type)
  context.message = (event.data && event.data.message) || (event.payload && event.payload.message)
})

export default saveErrorInContext