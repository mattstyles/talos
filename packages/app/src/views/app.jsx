
import React, {Fragment} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import oc from 'open-color'

import {Icon, theme} from '@talos/components'
import Title from 'components/title'

import {signal} from 'signals'

const Button = styled.button`
  font-family: 'source code pro';
  font-size: 1.6rem;
  background: ${oc.blue[5]};
  color: ${oc.white};
  line-height: 2;
  padding: 0 1.8rem;
  border: none;
  border-radius: 3px;
`

const update = event => {
  signal.emit({
    type: 'UPDATE_MESSAGE'
  })
}

const App = ({state}) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Title>
        {`chaos-remake: ${state.message}`}
      </Title>
      <Button onClick={update}>Click me</Button>
      <Icon icon='HOME' />
    </Fragment>
  </ThemeProvider>
)

export default App
