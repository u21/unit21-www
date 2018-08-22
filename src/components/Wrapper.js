import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'

import * as spacing from 'styles/spacing'
import { media } from 'styles/media'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1040px;
  padding-left: ${spacing.large};
  padding-right: ${spacing.large};

  ${media.small`
    padding-left: ${spacing.xxLarge};
    padding-right: ${spacing.xxLarge};
  `};

  ${media.medium`
    padding-left: 56px;
    padding-right: 56px;
  `};

  ${media.xLarge`
    padding-left: 0;
    padding-right: 0;
  `};
`

const Wrapper = ({ children }) => (
  <Container>
    {children}
  </Container>
)

Wrapper.propTypes = {
  children: node.isRequired
}

export default Wrapper
