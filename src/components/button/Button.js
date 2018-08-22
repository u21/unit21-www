import React from 'react'
import styled, { css } from 'styled-components'
import { node, func, bool } from 'prop-types'
import { Link } from 'gatsby'
import { mix, rgba } from 'polished'

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
  padding: 0 ${spacing.large};
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

  ${props => props.secondary && css`
    background-color: transparent;
    color: ${white};
    border: 1px solid ${rgba(white, 0.15)};

    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      border-color: ${rgba(white, 0.3)};
    }
  `}

  ${media.medium`
    padding: 0 ${spacing.xLarge};
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

const Button = ({ children, primary, secondary, ...rest }) => {
  const ActualContainer = getContainer(rest)

  return (
    <ActualContainer primary={primary} secondary={secondary} {...rest}>
      <SmallCaps>
        {children}
      </SmallCaps>
    </ActualContainer>
  )
}

Button.propTypes = {
  children: node.isRequired,
  Container: func,
  primary: bool,
  secondary: bool
}

export default Button
