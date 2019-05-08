module.exports = {
  siteMetadata: {
    title: 'Covestro LIGHTFAIR 2019',
    siteUrl: `https://www.covestro-lightfair-2019.netlify.com`
  },
  plugins: [
    'gatsby-plugin-svg-sprite',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`
  ]
}
