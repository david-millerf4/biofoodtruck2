import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Biologo from "../components/biologo"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HomePage = ({ location }) => {

    return (
        <Layout location={location}>
            <Row className="gx-0">
                <Col className="text-center">
                    <h1 className="callout-text hp-marquee">RuzaNera</h1>
                </Col>
            </Row>
            <Row className="gx-0">
                <Col className="text-center textblock">
                    <p>
                        <StaticImage src="../images/biofoodtruck-hero.jpg" alt="photo of ruza nera bio foodtruck" width={1024} />
                    </p>

                    <h2 className="xl-text">bio - regional - frisch - glutenfrei</h2>
                    <p className="text-center" style={{fontFamily: "arial, helvetica, sans-serif"}}>
                        Wir bereiten die Speisen, soweit es möglich ist, frisch in unserem Biofoodtruck vor Ort für Sie zu.
                        <br />Dabei können Sie dem Koch über die Schulter schauen,
                        die Flammen lodern sehen
                        <br />und den Duft von frischen Kräutern geniessen.
                        <br />Alle Zutaten und Produkte werden von uns sorgfältig ausgewählt….beim Biobauern im nächsten Dorf
                        <br />oder bei einem biozertifizierten Hersteller unseres Vertrauens.
                        <br />Unser Speisenangebot ist sehr flexibel.
                        <br />Je nach Saison und Angebot zaubert unser Profikoch Zoran schmackhaftes,
                        <br />frisches bio- und glutenfreies Essen aus der Pfanne oder vom Grill.
                    </p>
                    <p className="callout-text lg-text">
                        Unser mobile Kitchen ist nicht nur <strong>bio</strong>, sondern auch glutenfrei und transparent.
                    </p>
                    <p className="callout-text lg-text">
                        <Link to="/catering">BioFoodtruck Catering</Link> für Ihren Event.
                    </p>
                    <p className="callout-text xl-text">
                        …..transparentes Kochen in einer <br />mobilen Küche….<br />und sind 100% Bio-Zertifiziert
                    </p>
                    <p>
                        <strong>Ois Bio. Keine Kompromisse.
                            <br />Natürlich sind wir biozertifiziert.
                        </strong>
                        <br /><strong>Seit 2017</strong>
                    </p>
                    <Biologo />
                </Col>
            </Row>
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

