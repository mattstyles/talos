
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button} from '@talos/components'

// import actions from 'core/actions'
//
// const {updateMessage} = actions
import {updateMessage} from 'core/actions'

const Heading = styled.h1`
  font-size: 2.2rem;
  color: rgb(44, 44, 44);
  font-family: 'source code pro';
`

const Title = ({text, children}) => (
  <Fragment>
    <Heading>
      {children || text}
    </Heading>
    <Button onClick={() => {
      updateMessage.of()
    }}>Click Me</Button>
  </Fragment>
)

Title.propTypes = {
  text: PropTypes.string
}

Title.defaultProps = {
  text: null
}

export default Title
