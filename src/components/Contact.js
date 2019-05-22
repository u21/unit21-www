import React from 'react'
import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

import { H2 } from 'styles/typography'
import { greyDark, greyLight, white } from 'styles/colors'
import { verticalPadding } from 'styles/global'
import Wrapper from 'components/Wrapper'
import Button from 'components/button/Button'
import Section from 'components/Section'
import * as spacing from 'styles/spacing'
import { media, mediaDown } from 'styles/media'

const currentYear = new Date().getFullYear()

const float = keyframes`
  0%, 100% { transform: translateY(5%) rotate(3deg); }
  50% { transform: translateY(0) rotate(-5deg); }
`

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${greyDark};
`

const Inner = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;

  ${mediaDown.medium`
    text-align: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  `};

  ${media.medium`
    display: flex;
    align-items: center;
  `};
`

const Title = styled(H2)`
  color: ${white};
  margin-bottom: ${spacing.large};

  ${media.small`
    margin-bottom: ${spacing.xLarge};
  `};

  ${media.medium`
    margin-bottom: 0;
    padding-right: ${spacing.xxLarge};
  `};

  ${media.large`
    padding-right: ${spacing.xxxLarge};
  `};
`

const ContactButton = styled(Button)`
  flex-shrink: 0;
`

const Copyright = styled.footer`
  text-align: center;
  border-top: 1px solid ${rgba(white, 0.08)};
  color: ${rgba(greyLight, 0.8)};
  ${verticalPadding(spacing.large)};

  ${media.small`
    ${verticalPadding(spacing.xLarge)};
  `};

  ${media.large`
    ${verticalPadding(spacing.xxLarge)};
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

const Contact = () => (
  <Container id="contact">
    <Section>
      <Wrapper>
        <Inner>
          <Title>Interested in learning more about how we can help streamline your compliance operations?</Title>
          <ContactButton primary href="mailto:contact@unit21.ai">Contact us</ContactButton>
        </Inner>
      </Wrapper>
    </Section>
    <Copyright>
      <Wrapper>
        <p><a href={require("static/unit21-privacy-policy.pdf")} download> Privacy Policy</a></p>
      </Wrapper>
      <Wrapper>
        <p>© {currentYear} Unit21 Inc.</p>
      </Wrapper>
    </Copyright>
    <Mark src={require("static/images/logo-mark.svg")} alt="Unit21 logo" role="presentation" />
  </Container>
)

export default Contact
