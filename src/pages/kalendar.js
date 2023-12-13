import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Biologo from "../components/biologo"

const Kalendar = ({ location }) => {
    return (
        <Layout location={location}>
            <h1>Kalendar</h1>
            <p><StaticImage id="Karte" src="../images/bft_okoP1.jpg" alt="" style={{ width: `70%` }} /></p>
            <h3>Hier sind wir unterwegs in 2023...!</h3>
            <StaticImage id="Karte" src="../images/bft_okoP2.jpg" alt="" style={{ width: `70%` }} />
            <Biologo />
        </Layout>
    )
}

export const Head = () => <Seo title="Kalendar" />

export default Kalendar