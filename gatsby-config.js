require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Roy Hewitt, Web Developer',
    twitter: 'r0yhewitt',
    instagram: 'r0yhewitt',
    github: 'rhewitt22',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#112F41`,
        theme_color: `#112F41`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-smartypants`, `gatsby-remark-a11y-emoji`],
      },
    },
    {
      resolve: `gatsby-source-untappd`,
      options: {
        id: process.env.UNTAPPD_CLIENT_ID,
        secret: process.env.UNTAPPD_CLIENT_SECRET,
      },
    },
    {
      resolve: `gatsby-source-strava`,
      options: {
        id: process.env.STRAVA_CLIENT_ID,
        secret: process.env.STRAVA_CLIENT_SECRET,
        refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      },
    },
  ],
}
