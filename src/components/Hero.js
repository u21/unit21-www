import React from 'react'
import styled from 'styled-components'

import { greyDark, greyLight, white } from 'styles/colors'
import { H1, Lead } from 'styles/typography'
import * as spacing from 'styles/spacing'
import Wrapper from 'components/Wrapper'
import Button from 'components/button/Button'
import ButtonGroup from 'components/button/ButtonGroup'
import { media, mediaDown } from 'styles/media'

const Container = styled.header`
  position: relative;
  overflow: hidden;
  background-color: ${white};
  color: ${greyLight};
  padding-top: 6rem;
  padding-bottom: 3rem;

  ${media.small`
    padding-top: 7rem;
    padding-bottom: 3.5rem;
  `};

  ${media.medium`
    padding-top: 8rem;
    padding-bottom: 4rem;
  `};

  ${media.large`
    padding-top: 11rem;
    padding-bottom: 5rem;
  `};

  ${media.xLarge`
    padding-top: 11rem;
    padding-bottom: 6rem;
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
  color: ${greyDark};
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

const Hero = () => (
  <Container>
    <Nav>
      <Wrapper>
        <Logo src={require("static/images/logo.png")} alt="Unit21 logo" />
      </Wrapper>
    </Nav>
    <Wrapper>
      <Content>
        <Title>The human-powered API for compliance operations.</Title>
        <Subtitle>Unit21 uses machine learning & human intelligence to help you identify and investigate money laundering & fraud.</Subtitle>
        <ButtonGroup>
          <Button primary href="mailto:contact@unit21.ai?subject=I'd like to see a demo!">Schedule a demo</Button>
        </ButtonGroup>
      </Content>
    </Wrapper>
  </Container>
)

export default Hero
