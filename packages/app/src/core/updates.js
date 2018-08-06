
import {safe} from 'raid-addons'
// import {safe, compress} from 'raid-addons'
import match from '@mattstyles/match'

// import actions from 'core/actions'
// import {updateMessage} from 'core/actions'

export const debug = safe((state, event) => {
  console.log(event, '::', state)
})

// export const updateMessage = compress({
//   [actions.updateMessage]: safe((state, event) => {
//     return {
//       ...state,
//       message: state.message === 'hello'
//         ? 'world'
//         : 'hello'
//     }
//   })
// })

// const updateMessageUpdate = (state, event) => {
//   console.log('matched', state, event)
//   return state
// }

// export default match([
//   [updateMessage.is, updateMessageUpdate],
//   [(state, event) => {
//     return state
//   }]
// ])
export default match([
  [
    (event) => {
      console.log(event)
      return true
    },
    (state, event) => {
      console.log('matched', state, event)
      return state
    }

  ],
  [
    (state, event) => state
  ]
])
