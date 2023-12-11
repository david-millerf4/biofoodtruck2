import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Biologo from "../components/biologo"
import Col from 'react-bootstrap/Col'

const HomePage = ({ location }) => {

    return (
        <Layout location={location}>
            <Col className="text-center">
                <h1 className="hp-marquee">Ruza Nera</h1>
                <h2>Bio Foodtruck & Bio Catering</h2>
                <h3 className="bio-grun">100% Bio-Zertifiziert</h3>
                <h4>Bio - Regional - Frisch - Glutenfrei - Laktosefrei</h4>

                <p>
                    <StaticImage src="../images/biofoodtruck-hero.jpg" alt="photo of ruza nera bio foodtruck" width="1024" />
                </p>

                <h5>Foodtruck Catering für Ihr Event</h5>
                <p>
                    Wir bereiten die Speisen, soweit es möglich ist, frisch in unserem Biofoodtruck vor Ort für Sie zu.
                    <br />Dabei können Sie dem Koch über die Schulter schauen, die Flammen lodern sehen und den Duft von frischen Kräutern geniessen.
                </p>
                <p>
                    Alle Zutaten und Produkte werden von uns sorgfältig ausgewählt….beim <strong>Biobauern</strong> im nächsten Dorf oder bei einem <strong>biozertifizierten</strong> Hersteller unseres Vertrauens.
                    <br />Unser Speisenangebot ist sehr flexibel (vielfältig).
                </p>
                <p>
                    Je nach Saison und Angebot zaubert unser Profikoch Zoran schmackhaftes, frisches bio- und glutenfreies Essen aus der Pfanne oder vom Grill.
                </p>
                <p>
                    Unser mobile Kitchen ist nicht nur <strong>bio</strong>, sondern auch glutenfrei und transparent.
                </p>
                <p>
                    Foodtruck Catering für Ihr Event.
                    <br />...transparentes Kochen in einer
                    <br />mobilen Küche…
                </p>
                <p>
                    <strong className="bio-grun">Ois Bio. Keine Kompromisse.
                        <br />Natürlich sind wir biozertifiziert.</strong>
                </p>
                <Biologo />
            </Col>
        </Layout>
    )
}

export default HomePage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Homepage" />

