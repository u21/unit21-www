import React from 'react'
import { node, bool, string } from 'prop-types'
import styled, { css } from 'styled-components'

import { verticalPadding } from 'styles/global'
import { media } from 'styles/media'

const Container = styled.section`
  ${verticalPadding('3.5rem')};

  ${props => props.flushTop && css` padding-top: 0 !important; `}
  ${props => props.flushBottom && css` padding-bottom: 0 !important; `}
  ${props => props.flush && css` padding: 0 !important; `}

  ${media.small`
    ${verticalPadding('4.5rem')};
  `};

  ${media.medium`
    ${verticalPadding('6.5rem')};
  `};

  ${media.large`
    ${verticalPadding('8rem')};
  `};

  ${media.xLarge`
    ${verticalPadding('10rem')};
  `};
`

const Section = ({ children, flushTop, flushBottom, flush, id }) => (
  <Container flushTop={flushTop} flushBottom={flushBottom} flush={flush} id={id}>
    {children}
  </Container>
)

Section.propTypes = {
  children: node.isRequired,
  flushTop: bool,
  flushBottom: bool,
  flush: bool,
  id: string
}

export default Section
