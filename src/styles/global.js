import { css, injectGlobal } from 'styled-components'

import Normalize from './normalize'
import Utilities from './utilities'
import { white } from './colors'

// Misc
export const buttonHeightMobile = '44px'
export const buttonHeightDesktop = '52px'

// Animation
export const animationTime = '0.3s'
export const animationCurve = 'cubic-bezier(0.785, 0.135, 0.150, 0.860)'

// Border Radius
export const borderRadius = '0'

// Vertical padding
export const verticalPadding = padding => css`
  padding-top: ${padding};
  padding-bottom: ${padding};
`

// Square
export const square = size => css`
  width: ${size};
  height: ${size};
`

// Cover
export function cover(position) {
  return `
    position: ${position};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `
}

// Styles

injectGlobal`
  ${Normalize};
  ${Utilities};

  body {
    background-color: ${white};
  }
`