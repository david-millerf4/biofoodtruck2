import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeroImg from "../images/biofoodtruck-hero.jpg"
import BioImage from "../images/biofoodtruck-oko-logo-cr.png"

const HomePage = ({ data, location }) => {
  const siteTitle = data?.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
    <SEO title="Bio Foodtruck & Bio Catering" />
    <h2 className="bio-grun">100% Bio-Zertifiziert</h2>
    <h3>Foodtruck Catering für Ihr Event</h3>
    <h4>Regional - Frisch - Glutenfrei - Laktosefrei</h4>

    {/* <GatsbyImage image={HeroImg} alt="hero image" /> */}

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
    <Row className="justify-content-center">
        <Col className="bio-logo">
            {/* <GatsbyImage image={BioImage} alt="bio image" /> */}
            <h4 className="bio-img-kontrol-text">Kontrolliert durch DE-ÖKO-037</h4>
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
export const Head = () => <SEO title="Homepage" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
