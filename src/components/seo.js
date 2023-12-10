/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, title, children }) => {
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
              siteMetadata {
                title
                author {
                  name
                  summary
                }
                description
                siteBrand
                siteUrl
                siteImage
                keywords
                social {
                  twitterUsername
                  twitterUrl
                  instagramUrl
                  facebookUrl
                }
              }
            }
          }
        `
      )
  
      const defaultDescription = description || site.siteMetadata.description
      const defaultTitle = site.siteMetadata?.title
      const pathName = `${site.siteMetadata?.siteUrl}/${title.toString().toLowerCase()}`
      const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${site.siteMetadata.siteUrl}/${site.siteMetadata.image}`,
          url: `${site.siteMetadata.siteUrl}${pathName || ``}`,
          twitterName: site.siteMetadata?.social?.twitterUsername || ``,
          twitterUrl: site.siteMetadata?.social?.twitterUrl || ``,
          instagramUrl: site.siteMetadata?.social?.instagramUrl || ``,
          facebookUrl: site.siteMetadata?.social?.facebookUrl  || ``
        }
  
      return (
          <>
              <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
              <link rel="canonical" href={pathName} />
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={seo.description} />
              <meta property="fb:app_id" content={seo.facebookUrl} />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="biofoodtruck"></meta>
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:creator" content={seo.twitterName || ``} />
              <meta name="twitter:title" content={title} />
              <meta name="twitter:description" content={seo.description} />
              <meta name="twitter:url" content={seo.twitterUrl} />
              <meta name="twitter:site" content={seo.twitterUrl} />
              <meta name="twitter:image:alt" content="biofoodtruck logo" />
              {children}
          </>
      )
  }
  
  export default Seo