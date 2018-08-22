import React from 'react'
import styled, { keyframes } from 'styled-components'

import { greyDark, greyLight, white } from 'styles/colors'
import { H1, Lead } from 'styles/typography'
import * as spacing from 'styles/spacing'
import Wrapper from 'components/Wrapper'
import Button from 'components/button/Button'
import ButtonGroup from 'components/button/ButtonGroup'
import { media, mediaDown } from 'styles/media'

const float = keyframes`
  0%, 100% { transform: translateY(5%) rotate(3deg); }
  50% { transform: translateY(0) rotate(-5deg); }
`

const Container = styled.header`
  position: relative;
  overflow: hidden;
  background-color: ${greyDark};
  color: ${greyLight};
  padding-top: 6rem;
  padding-bottom: 4.5rem;

  ${media.small`
    padding-top: 7rem;
    padding-bottom: 5.5rem;
  `};

  ${media.medium`
    padding-top: 8rem;
    padding-bottom: 6.5rem;
  `};

  ${media.large`
    padding-top: 11rem;
    padding-bottom: 8rem;
  `};

  ${media.xLarge`
    padding-top: 11rem;
    padding-bottom: 10rem;
  `};

  ${mediaDown.medium`
    text-align: center;
  `};
`

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: ${spacing.xxLarge};

  ${media.small`
    padding-top: 48px;
  `};

  ${media.medium`
    padding-top: 56px;
  `};

  ${media.large`
    padding-top: 64px;
  `};

  ${media.xLarge`
    padding-top: 72px;
  `};
`

const Content = styled.div`
  position: relative;
  z-index: 10;

  ${mediaDown.medium`
    margin-left: auto;
    margin-right: auto;
  `};

  ${media.small`
    max-width: 600px;
  `};

  ${media.medium`
    max-width: 700px;
  `};

  ${media.large`
    max-width: 760px;
  `};
`

const Title = styled(H1)`
  color: ${white};
  margin-bottom: ${spacing.medium};

  ${media.medium`
    margin-bottom: ${spacing.large};
  `};
`

const Subtitle = styled(Lead)`
  max-width: 700px;
  margin-bottom: ${spacing.large};
  mix-blend-mode: lighten;

  ${media.medium`
    margin-bottom: ${spacing.xLarge};
  `};

  ${media.large`
    margin-bottom: ${spacing.xxLarge};
  `};
`

const Logo = styled.img`
  width: 110px;

  ${media.small`
    width: 120px;
  `};

  ${media.medium`
    width: 130px;
  `};

  ${media.large`
    width: 140px;
  `};
`

const Mark = styled.img`
  position: absolute;
  top: 5%;
  left: 0;
  right: 0;
  margin: auto;
  width: 660px;
  opacity: 0.1;
  mix-blend-mode: lighten;
  pointer-events: none;
  animation: ${float} 30s linear infinite;

  ${media.medium`
    width: 75%;
    height: auto;
    left: auto;
    right: -5%;
    top: -5%;
  `};
`

const Hero = () => (
  <Container>
    <Nav>
      <Wrapper>
        <Logo src={require("static/images/logo.svg")} alt="Unit21 logo" role="presentation" />
      </Wrapper>
    </Nav>
    <Wrapper>
      <Content>
        <Title>Financial crime compliance for new-age companies</Title>
        <Subtitle>Unit21 uses machine learning to help you identify and investigate money laundering. Focus on growing your business, not your compliance operations.</Subtitle>
        <ButtonGroup>
          <Button primary href="mailto:contact@unit21.ai?subject=I'd like to see a demo!">Schedule a demo</Button>
          <Button secondary href="#overview">Learn more</Button>
        </ButtonGroup>
      </Content>
    </Wrapper>
    <Mark src={require("static/images/logo-mark.svg")} alt="Unit21 logo" role="presentation" />
  </Container>
)

export default Hero
