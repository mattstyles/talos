
import {render} from 'react-dom'
import {setGlobalStyling} from '@talos/components'

import {signal} from 'signals'
import App from 'views/app'
import coreUpdates, {debug} from 'core/updates'

const el = document.querySelector('.js-main')

setGlobalStyling()

if (process.env.DEBUG) {
  signal.register(debug)
}

signal.register(coreUpdates)

signal.observe(state => {
  render(
    <App state={state} />,
    el
  )
}, err => console.error(err))

if (module.hot) {
  module.hot.dispose(() => {
    console.group('[HMR] dispose')
    console.log('disposing signal updates')
    console.groupEnd('[HMR] dispose')
    signal.updates.forEach((k, v) => {
      signal.updates.delete(v)
    })
  })
  module.hot.accept(() => {
    console.group('[HMR] accept')
    console.groupEnd('[HMR] accept')
    signal.emit({
      hmr: 'accept'
    })
  })
}
