import { css } from 'styled-components'
import { media, mediaDown } from './media'

export default css`

  .u-flex {
    display: flex !important;
  }

  .u-text-center {
    text-align: center !important;
  }

  .u-text-center-medium-up {
    ${media.medium`
      text-align: center !important;
    `};
  }

  .u-hide-small-down {
    ${mediaDown.small`
      display: none !important;
    `};
  }

  .u-hide-medium-down {
    ${mediaDown.medium`
      display: none !important;
    `};
  }

  .u-hide-medium-up {
    ${media.medium`
      display: none !important;
    `};
  }

  .is-clipped {
    overflow: hidden !important;
  }
`