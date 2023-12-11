import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Biologo from "../components/biologo"

const AboutUs = ({ data, location }) => {
    const siteTitle = data?.site.siteMetadata.title
    return (
        <Layout location={location} title={siteTitle}>
            <div className="textblock">
                <h1>Über uns</h1>
                <div>
                    <strong>Wir sind ein Biofoodtruck.</strong>
                    <br />Das bedeutet:
                    <ul>
                        <li>dass wir nur mit <strong>zertifizierter</strong> Bioware kochen</li>
                        <li>Ohne Zusatzstoffe und Geschmacksverstärker</li>
                        <li>Das Fleisch kommt ausschliesslich von <strong>biozertifizierten</strong> Höfen, auf denen die Tiere ein artgerechtes Leben haben</li>
                        <li>Das Gemüse und Obst wird nicht mit Pestiziden oder anderen giftigen Stoffen behandelt</li>
                        <li>Unsere Speisen sind <strong className="bio-grun">100% Bio-zertifiziert</strong>, glutenfrei, und laktosefrei</li>
                    </ul>
                </div>
                <Biologo />
                <h3>Wir sind ein Familienunternehmen</h3>
                <p>
                    <StaticImage id="Truck1" src="../images/bft-gruene-profile.jpg" alt="Karina and Zoran" style={{ marginRight: `3em` }} />
                    <StaticImage id="Truck2" src="../images/aboutKT.jpg" alt="Bio foodtruck family" style={{ width: `50%` }} />
                    <br />Meine Schwester backt mit viel Leidenschaft, glutenfreie CupCakes, Brownies und vieles mehr.
                    <br />Zoran ist unser Profikoch, er zaubert schmackhafte Speisen.
                    <br />Ich hatte die Idee von einem Lokal oder Foodtruck......Ich bin selbst von Zölliakie betroffen und ernähre mich schon lange Jahre aus Überzeugung nur mit Bioprodukten.
                    <br />Mein Traum war es, Speisen anzubieten, die bio und glutenfrei sind, sodass jeder ohne Bedenken gut und gesund essen kann.
                </p>

                <h3>Food & Art</h3>
                <p>
                    Food & Art zusammen? Natürlich!
                    <br /><StaticImage src="../images/biofoodtruck-logo.jpg" alt="Bio Foodtruck food and art logo" />
                    <br />Mein andere leben als Diplom Grafik-Designerin: <a href="http://www.schlaffer.net/" target="_blank" rel="noopener noreferrer">Karina Schlaffer - Atelier 21</a>
                </p>
                <StaticImage id="Truck3" src="../images/bft_sk1.jpg" alt="Bio foodtruck einsatz Sandizell" style={{ width: `60%` }} />
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default AboutUs

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`