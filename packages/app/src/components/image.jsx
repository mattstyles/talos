
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {isUndefined} from 'lodash/fp'

const imageRenderingMixin = `
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -webkit-crisp-edges;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: pixelated;
`

export const Image = styled.div`
  display: inline-block;
  background-position: -${props => props.u * props.size}px -${props => props.v * props.size}px;
  background-image: url('${props => props.url}');
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  transform: scale(${props => props.scale});
  ${imageRenderingMixin}

  ${props => (!isUndefined(props.x) || !isUndefined(props.y) || !isUndefined(props.z)) && css`
    position: absolute;
    transform: translate3d(${props => props.x || 0}px, ${props => props.y || 0}px, ${props => props.z || 0}px) scale(${props => props.scale});
  `}
`

Image.propTypes = {
  u: PropTypes.number,
  v: PropTypes.number,
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
  scale: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  z: PropTypes.number
}

Image.defaultProps = {
  u: 0,
  v: 0,
  size: 16,
  scale: 1
}
