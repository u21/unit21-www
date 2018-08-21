import React from 'react'
import styled from 'styled-components'

import { H2, Lead } from 'styles/typography'
import { primaryColor, white, offWhite } from 'styles/colors'
import Wrapper from 'components/Wrapper'
import Button from 'components/Button'
import Section from 'components/Section'
import * as spacing from 'styles/spacing'
import { media } from 'styles/media'

const Container = styled.div`
  background-color: ${offWhite};
`

const Contact = () => (
  <Container id="contact">
    <Section>
      <Wrapper>
        Contact goes here
      </Wrapper>
    </Section>
  </Container>
)

export default Contact
