
import Title from 'components/title'
import styled from 'styled-components'
import oc from 'open-color'

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
  <div>
    <Title>
      {`chaos-remake: ${state.message}`}
    </Title>
    <Button onClick={update}>Click me</Button>
  </div>
)

export default App
