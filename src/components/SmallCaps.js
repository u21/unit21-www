import styled from 'styled-components'

import { media } from 'styles/media'
import { fontWeights, fontFamilies } from 'styles/typography'

export default styled.span`
  font-weight: ${fontWeights.bold};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${fontFamilies.heading};

  ${media.medium`
    font-size: 13px;
  `};
`
