import React from 'react'
import { node } from 'prop-types'
import Helmet from 'react-helmet'

const Layout = ({ children }) => (
  <>
    <Helmet
      title="UNIT21"
      meta={[
        { name: 'description', content: 'Financial Crimes Compliance' },
        { name: 'keywords', content: 'anti money laundering, money laundering,  financial crimes, aml, fraud, fintech' },
      ]}
    />
    {children}
  </>
)

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout