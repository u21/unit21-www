import React from 'react'
import styled from 'styled-components'

import { offWhite } from 'styles/colors'
import Wrapper from 'components/Wrapper'
import Section from 'components/Section'

const Container = styled.footer`
  background-color: ${offWhite};
`

const Footer = () => (
  <Container>
    <Section>
      <Wrapper>
        <p>Footer goes here</p>
      </Wrapper>
    </Section>
  </Container>
)

export default Footer
