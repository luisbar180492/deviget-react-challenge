import states from 'stateMachines/pages/game/states'
import saveErrorInContext from 'stateMachines/pages/game/actions/saveErrorInContext'
import saveSocketInContext from 'stateMachines/pages/game/actions/saveSocketInContext'
import { io } from 'socket.io-client'

const src = (context, event) => new Promise((resolve, reject) => {
  try {
    resolve(io('http://localhost:3001'))
  } catch (error) {
    reject(error)
  }
})

const onDone = {
  target: states.WAITING,
  actions: [saveSocketInContext],
}

const onError = {
  target: states.ERROR,
  actions: [saveErrorInContext],
}

export default {
  src,
  onDone,
  onError,
}