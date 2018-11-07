import React from 'react'

import Layout from 'layouts/index'
import Wrapper from 'components/Wrapper'
import Section from 'components/Section'
import FeatureRow from 'components/FeatureRow'
import Contact from 'components/Contact'
import Hero from 'components/Hero'

const Home = () => (
  <Layout>
    <Hero />
    <div id="overview" />
    <Section>
      <Wrapper>
        <FeatureRow
          number="01"
          heading="Streamline your financial crimes compliance operations."
          description="Anti-money laundering fines can make or break your business. We provide a machine learning solution to reduce alert resolution time so you can focus efforts on the cases that matter."
          figure="operations"
        />
        <FeatureRow
          number="02"
          heading="Don't waste time on investigation overhead."
          description="Use our beautiful, modern AML workbench to enhance your compliance operations so you can operate at maximal efficiency. Our software is designed to empower teams of sizes from one to multiple hundreds."
          figure="workbench"
          alt
        />
        <FeatureRow
          number="03"
          heading="Leverage our team of expert human analysts."
          description="Fully or partially offload your manual AML reviews to our team. Unit21's operations analysts have years of experience in AML investigations and reporting. We charge by review quantity - not by the hour."
          figure="expert"
        />
      </Wrapper>
    </Section>
    <Contact />
  </Layout>
)

export default Home
