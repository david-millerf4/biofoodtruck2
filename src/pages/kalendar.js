import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Biologo from "../components/biologo"

const Kalendar = ({ data, location }) => {
    const siteTitle = data?.site.siteMetadata.title
    return (
        <Layout location={location} title={siteTitle}>
            <div className="textblock">
                <h1>Kalendar</h1>
                <p><StaticImage id="Karte" src="../images/bft_okoP1.jpg" alt="" style={{ width: `70%` }} /></p>
                <h3>Hier sind wir unterwegs in 2023...!</h3>
                <StaticImage id="Karte" src="../images/bft_okoP2.jpg" alt="" style={{ width: `70%` }} />
                <Biologo />
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Kalendar" />

export default Kalendar

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`