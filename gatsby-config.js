module.exports = {
  siteMetadata: {
    title: `The Church In Brielle`,
    description: `We are an open and inclusive church. We welcome all from our communities as we interpret the word of god, while creating a center of spiritual wellness.`,
    author: `@Diamond Digital Services`,
    siteUrl: `https://www.thechurchinbrielle.org`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule:{
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Church In Brielle`,
        short_name: `Brielle Church`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
