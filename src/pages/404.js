import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <div className="textblock">
                <h1>404: Seite nicht gefunden.</h1>
                <p className="lg-text">
                    Da scheint wohl etwas schief gelaufen zu sein.
                    <br />Die Seite konnte leider nicht gefunden werden.
                </p>
                <Link to="/">
                    <StaticImage src="../images/biofoodtruck_hintern.jpg" alt="biofoodtruck hintern" height="450" />
                    <div className="lg-text">Zum Homepage</div>
                </Link>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
