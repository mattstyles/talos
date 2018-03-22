
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Heading = styled.h1`
  font-size: 2.2rem;
  color: rgb(44, 44, 44);
  font-family: 'source code pro';
`

const Title = ({text, children}) => (
  <Heading>
    {children || text}
  </Heading>
)

Title.propTypes = {
  text: PropTypes.string
}

Title.defaultProps = {
  text: null
}

export default Title
