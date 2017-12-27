
import {configure, addDecorator} from '@storybook/react'

import {setGlobalStyling} from '../src'
import {Base} from './base'

setGlobalStyling()

addDecorator(story => (
  <Base>{story()}</Base>
))

const stories = require.context('../stories', true, /\.stories\.js$/)
const components = require.context('../src', true, /\.stories\.js$/)
function loadStories () {
  stories.keys().forEach(filename => stories(filename))
  components.keys().forEach(filename => components(filename))
}

configure(loadStories, module)
