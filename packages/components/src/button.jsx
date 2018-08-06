
import styled from 'styled-components'

import {getColor} from './theme/utils'

export const Button = styled.button`
  font-family: 'source code pro';
  font-size: 1.6rem;
  background: ${props => props.background || getColor('primary')};
  color: ${props => props.color || getColor('button.color')};
  line-height: 2;
  padding: 0 1.8rem;
  border: none;
  border-radius: 3px;
`
