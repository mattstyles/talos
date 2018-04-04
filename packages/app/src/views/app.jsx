
import React, {Fragment} from 'react'
import Title from 'components/title'
import styled from 'styled-components'
import oc from 'open-color'

import {signal} from 'signals'

import {Image} from '../components/image'
import imagePath from '../assets/charb.png'

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
  <Fragment>
    <Title>
      {`chaos-remake: ${state.message}`}
    </Title>
    <Button onClick={update}>Click me</Button>
    <Image
      url={imagePath}
      scale={16}
      size={8}
      u={0}
      v={0}
    />
    <div style={{position: 'relative'}}>
      <Image
        url={imagePath}
        scale={16}
        size={8}
        u={1}
        v={1}
        x={200}
        y={200}
      />
    </div>
  </Fragment>
)

export default App
