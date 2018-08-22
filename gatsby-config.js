module.exports = {
  siteMetadata: {
    title: 'Unit21',
    author: 'Unit21',
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'https://unit21.ai'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'space mono\:700',
          'source sans pro\:400'
        ]
      }
    },
  ],
}
