import styled, { injectGlobal } from 'styled-components'
import { stripUnit, rgba } from 'polished'

import { media } from './media'
import { greyDark, primaryColor, grey } from './colors'
import { animationTime, animationCurve } from './global'

// Font family
export const fontFamilies = {
  body: "'source sans pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  heading: "'Space Mono', monospace"
}

// Font weights
export const fontWeights = {
  regular: 400,
  semiBold: 600,
  bold: 700,
  black: 900
}

export const lineHeights = {
  base: 1.5,
  heading: 1.25
}

// Font sizes
export const fontSizes = {
  regular: '16px',
  small: '14px',
  tiny: '12px'
}

export const H1 = styled.h1`
  font-weight: ${fontWeights.bold};
  color: ${greyDark};
  line-height: ${lineHeights.heading};
  font-size: 32px;
  font-family: ${fontFamilies.heading};
  letter-spacing: -0.03em;
  ${media.small`font-size: 36px`};
  ${media.medium`font-size: 42px`};
  ${media.large`font-size: 48px`};
`

export const H2 = styled.h2`
  font-weight: ${fontWeights.bold};
  color: ${greyDark};
  line-height: ${lineHeights.heading};
  font-size: 24px;
  font-family: ${fontFamilies.heading};
  letter-spacing: -0.02em;
  ${media.small`font-size: 26px`};
  ${media.medium`font-size: 28px`};
  ${media.large`font-size: 32px`};
`

export const H3 = styled.h3`
  font-weight: ${fontWeights.bold};
  color: ${greyDark};
  line-height: ${lineHeights.heading};
  font-size: 20px;
  font-family: ${fontFamilies.heading};
  ${media.medium`font-size: 22px`};
  ${media.large`font-size: 24px`};
`

export const H4 = styled.h4`
  font-weight: ${fontWeights.bold};
  color: ${greyDark};
  line-height: ${lineHeights.heading};
  font-size: 15px;
  font-family: ${fontFamilies.heading};
  ${media.medium`font-size: 16px`};
  ${media.large`font-size: 18px`};
`

export const H5 = styled.h5`
  font-weight: ${fontWeights.bold};
  font-size: 15px;
  color: ${greyDark};
  line-height: ${lineHeights.heading};
  ${media.medium`font-size: 16px`};
`

export const Lead = styled.p`
  font-size: 1.1em;

  ${media.medium`
    font-size: 1.2em;
  `};
`

injectGlobal`

  body {
    font-family: ${fontFamilies.body};
    line-height: ${lineHeights.base};
    color: ${grey};
    font-size: ${fontSizes.regular};

    ${media.medium`
      font-size: ${stripUnit(fontSizes.regular) + 1 + 'px'};
    `};

    ${media.large`
      font-size: ${stripUnit(fontSizes.regular) + 2 + 'px'};
    `};
  }

  small {
    font-size: ${fontSizes.small};
  }

  s {
    opacity: 0.3;
  }

  p {
    margin-bottom: 1.25em;

    &:last-child {
      margin-bottom: 0;
    }

    ${media.medium`
      margin-bottom: 1.5em;
    `};
  }

  p a {
    color: ${primaryColor};
    border-bottom: 1px solid ${rgba(primaryColor, 0.2)};
    transition: border-color ${animationTime} ${animationCurve};

    &:hover,
    &:focus {
      border-color: ${rgba(primaryColor, 0.4)};
    }
  }
`