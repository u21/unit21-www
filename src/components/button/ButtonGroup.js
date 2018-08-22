import React from 'react'
import styled from 'styled-components'
import { node, bool } from 'prop-types'
import { stripUnit } from 'polished'

import * as spacing from 'styles/spacing'
import { media } from 'styles/media'

const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  margin: -${stripUnit(spacing.small) * 0.75 + 'px'};

  ${media.medium`
    margin: -${spacing.small};
  `};
`

const Item = styled.div`
  padding: ${stripUnit(spacing.small) * 0.75 + 'px'};

  ${media.medium`
    padding: ${spacing.small};
  `};
`

const ButtonGroup = ({ children }) => (
  <Container>
    {React.Children.map(children, (child, i) => (
      <Item key={i}>
        {child}
      </Item>
    ))}
  </Container>
)

ButtonGroup.propTypes = {
  children: node.isRequired,
  full: bool
}

export default ButtonGroup
