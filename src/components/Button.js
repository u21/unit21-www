import React from 'react'
import styled from 'styled-components'
import { node, func } from 'prop-types'
import { Link } from 'gatsby'
import { mix } from 'polished'

import { primaryColor, white, black } from 'styles/colors'
import { animationTime, animationCurve, borderRadius, buttonHeightMobile, buttonHeightDesktop } from 'styles/global'
import * as spacing from 'styles/spacing'
import { media } from 'styles/media'
import SmallCaps from 'components/SmallCaps'

export const Container = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${buttonHeightMobile};
  border-radius: ${borderRadius};
  padding: 0 ${spacing.medium};
  cursor: pointer;
  text-align: center;
  color: ${white};
  transition: all ${animationTime} ${animationCurve};
  background-color: ${primaryColor};

  &:hover,
  &:focus,
  &:active {
    background-color: ${mix(0.93, primaryColor, black)};
  }

  ${media.medium`
    padding: 0 ${spacing.large};
    height: ${buttonHeightDesktop};
  `};

  &[disabled] {
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
    user-select: none;
  }

  &:hover,
  &:focus,
  &:active {
    transform: translateY(-1px);
  }
`

const LinkContainer = Container.withComponent(Link)

const HrefContainer = Container.withComponent('a')

const getContainer = props => {
  if (props.to) return LinkContainer
  if (props.href) return HrefContainer
  return Container
}

const Button = ({ children, ...rest }) => {
  const ActualContainer = getContainer(rest)

  return (
    <ActualContainer {...rest}>
      <SmallCaps>
        {children}
      </SmallCaps>
    </ActualContainer>
  )
}

Button.propTypes = {
  children: node.isRequired,
  Container: func
}

export default Button
