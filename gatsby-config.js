/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Ruza Nera Bio Food Truck & Bio Catering - 100% Bio-Zertifiziert! Gesund genießen!`,
    author: {
      name: `David Miller`,
      summary: `world-wide true believer webslinger`,
    },
    description: `Ruza Nera Bio Foodtruck & Bio Catering in München. 100% Bio-Zertifizert, Glutenfrei, Laktosefrei, Frisch und Regional.`,
    author: `@biofoodtruck`,
    siteBrand: `Ruza Nera Bio Foodtruck & Bio Catering`,
    siteUrl: `https://www.biofoodtruck.net/`,
    siteImage: `http://www.biofoodtruck.net/site_images/logo-biofoodtruck.jpg`,
    keywords: `bio catering, bio foodtruck, bio burger, bio vegetarisch, bio vegan, bio regional, bio aus bayern, bio event catering, glutenfrei, laktosefrei, bio street food, bio streetfood, food truck, biofleisch, bio fleisch, organic, organic catering, gluten free, organic foodtruck, gluten free foodtruck, gluten free catering, organic bavaria`,
    social: {
      twitterUsername: `RuzaNera`,
      twitterUrl: `https://twitter.com/RuzaNera/`,
      instagramUrl: `https://www.instagram.com/derbiofoodtruck/`,
      facebookUrl: `https://www.facebook.com/biofoodtruck/`
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Ruza Nera Biofoodtruck",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bio-food-truck-and-bio-catering`,
        short_name: `biofoodtruck`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/biofoodtruck-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
