import React from 'react'
import { node } from 'prop-types'
import Helmet from 'react-helmet'

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Unit21"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children}
  </>
)

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout