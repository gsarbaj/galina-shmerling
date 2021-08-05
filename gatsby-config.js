/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  /* Your site config here */

  siteMetadata:{
    title: `Школа Галины Шмерлинг`,
    description: `Галина Михайловна – смелый исследователь, сильный духом человек с исключительно чистым, ясным и живым умом. Обучение уникальному методу "Тайны Сферических матриц"`,
    titleTemplate: `%s | Школа Галины Шмерлинг`,
    url: `https://galina-shmerling.com`,
    image: `/mainimg.png`,

  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `82zdv8bdb4h9`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
