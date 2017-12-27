
import PropTypes from 'prop-types'
import styled from 'styled-components'

const H = styled.h1`
  font-size: 2.2rem;
  color: rgb(44, 44, 44);
  font-family: 'source code pro';
`

const Title = ({text, children}) => (
  <H>
    {children || text}
  </H>
)

Title.propTypes = {
  text: PropTypes.string
}

Title.defaultProps = {
  text: null
}

export default Title
