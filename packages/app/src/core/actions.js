
import {createActions} from 'signals'

const actionNames = [
  'updateMessage'
]

// export default createActions(actionNames)
//   .reduce((actions, action, i) => {
//     actions[actionNames[i]] = action
//     return actions
//   }, {})

export const [updateMessage] = createActions(actionNames)
