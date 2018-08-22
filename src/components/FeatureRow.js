import React from 'react'
import { bool, string } from 'prop-types'
import styled, { css } from 'styled-components'
import { stripUnit } from 'polished'

import { media, mediaDown } from 'styles/media'
import { H2 } from 'styles/typography'
import { greyLight, borderColor } from 'styles/colors'
import * as spacing from 'styles/spacing'
import SmallCaps from 'components/SmallCaps'

const Container = styled.div`
  width: 100%;
  margin-bottom: ${spacing.large};

  ${media.large`
    margin-bottom: ${spacing.xLarge};
  `};

  ${media.xLarge`
    margin-bottom: ${spacing.xxLarge};
  `};

  &:last-child {
    margin-bottom: 0;
  }

  ${mediaDown.medium`
    text-align: center;
  `};

  ${media.medium`
    display: flex;
    flex-direction: ${props => (props.alt && 'row-reverse') || 'row'};
    align-items: center;
  `};
`

const FigureWrap = styled.div`
  position: relative;
  width: 240px;
  flex-shrink: 0;

  ${media.small`
    width: 280px;
  `};

  ${mediaDown.medium`
    margin-left: auto;
    margin-right: auto;
  `};

  ${media.medium`
    width: 340px;

    ${props => !props.alt && css`
      margin-right: ${spacing.xxLarge};
    `}

    ${props => props.alt && css`
      margin-left: ${spacing.xxLarge};
    `}
  `};

  ${media.large`
    width: 360px;

    ${props => !props.alt && css`
      margin-right: ${spacing.xxxLarge};
    `}

    ${props => props.alt && css`
      margin-left: ${spacing.xxxLarge};
    `}
  `};

  ${media.xLarge`
    width: 380px;

    ${props => !props.alt && css`
      margin-right: 72px;
    `}

    ${props => props.alt && css`
      margin-left: 72px;
    `}
  `};
`

const Content = styled.div`
  position: relative;

  ${mediaDown.medium`
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  `};
`

const Heading = styled(H2)`
  margin-bottom: ${spacing.medium};

  ${media.large`
    margin-bottom: ${spacing.large};
  `};
`

const Number = styled(SmallCaps)`
  display: block;
  color: ${greyLight};
  margin-bottom: ${spacing.small};

  ${media.medium`
    display: flex;
    align-items: center;

    &:after {
      content: "";
      display: inline-block;
      width: 64px;
      height: 2px;
      background-color: ${borderColor};
      margin-left: ${spacing.small};
    }
  `};

  ${media.large`
    margin-bottom: ${spacing.medium};

    &:after {
      margin-left: ${stripUnit(spacing.small) * 1.5 + 'px'};
    }
  `};
`

const FeatureRow = ({ heading, description, figure, alt, number }) => (
  <Container alt={alt}>
    <FigureWrap alt={alt}><img src={require(`static/images/${figure}`)} alt="" role="presentation" /></FigureWrap>
    <Content>
      <Number>{number}</Number>
      <Heading>{heading}</Heading>
      <p>{description}</p>
    </Content>
  </Container>
)

FeatureRow.propTypes = {
  heading: string.isRequired,
  description: string.isRequired,
  figure: string.isRequired,
  number: string.isRequired,
  alt: bool
}

export default FeatureRow
