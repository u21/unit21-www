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
    <Section>
      <Wrapper>
        <FeatureRow
          number="01"
          heading="Reduce the risk of massive fines"
          description="Financial institutions have been fined $321 billion since 2008 for failure to comply with regulation such as anti-money laundering. These fines can make or break your business."
          figure="plan.jpg"
        />
        <FeatureRow
          number="02"
          heading="Don't waste time on false positives"
          description="Our product provides a configurable and flexible decisions engine that uses machine learning to learn from human investigations. We reduce false positives and help prevent crime from slipping through the cracks."
          figure="search.jpg"
          alt
        />
        <FeatureRow
          number="03"
          heading="Optimize your compliance processes"
          description="Unit21 provides a UI-first case management product, enabling your analysts to focus on the investigations and not the tool."
          figure="stats.jpg"
        />
      </Wrapper>
    </Section>
    <Contact />
  </Layout>
)

export default Home
