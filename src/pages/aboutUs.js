import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Biologo from "../components/biologo"

const AboutUs = ({ location }) => {
    return (
        <Layout location={location}>
            <h1 className="callout-text xl-text">Über uns</h1>
            <h2 className="callout-text lg-text">Wir sind ein Familienunternehmen</h2>
            <h3 className="callout-text lg-text">Wir sind ein Biofoodtruck - Bio-zertifiziert</h3>
            <h4 className="callout-text lg-text">Das bedeutet:</h4>
            <div className="position-relative">
                <ul className="list-text" style={{fontFamily: "arial, helvetica, sans-serif"}}>
                    <li>dass wir nur mit <strong>zertifizierter Bioware</strong> kochen.</li>
                    <li>Ohne Zusatzstoffe und Geschmacksverstärker.</li>
                    <li>Das Fleisch kommt ausschliesslich von <strong>biozertifizierten Höfen</strong>, auf denen die Tiere ein artgerechtes Leben haben</li>
                    <li>Das Gemüse und Obst wird nicht mit Pestiziden oder anderen giftigen Stoffen behandelt.</li>
                    <li>Unsere Speisen sind <strong>100% Bio-zertifiziert</strong>, glutenfrei, und laktosefrei</li>
                </ul>
            </div>
            <p className="text-center" style={{fontFamily: "arial, helvetica, sans-serif"}}>
                Meine Schwester backt mit viel Leidenschaft, glutenfreie CupCakes, Brownies und vieles mehr.
                Zoran ist unser Profikoch, er zaubert schmackhafte Speisen.
                Ich hatte die Idee von einem Lokal oder Foodtruck......Ich bin selbst von Zölliakie betroffen und ernähre mich schon lange Jahre  aus Überzeugung nur mit Bioprodukten. Mein Traum war es, Speisen anzubieten, die bio und glutenfrei sind, sodass jeder ohne Bedenken gut und gesund essen kann.
            </p>
            <h2>Wir sind ein Familienunternehmen</h2>
            <p>
                <StaticImage id="Truck1" src="../images/TruckKandZkl.jpg" alt="Karina and Zoran" />
            </p>
            <p className="lg-text" style={{fontFamily: "arial, helvetica, sans-serif"}}>Zoran ist unser Profikoch, er zaubert schmackhafte Speisen.</p>
            <p>
                <StaticImage id="Truck2" src="../images/aboutKT.jpg" alt="Bio foodtruck family" />
            </p>
            <p className="lg-text" style={{fontFamily: "arial, helvetica, sans-serif"}}>Meine Schwester backt mit viel Leidenschaft, glutenfreie CupCakes, Brownies und vieles mehr.</p>
            <p className="lg-text" style={{fontFamily: "arial, helvetica, sans-serif"}}>Ich hatte die Idee von einem Lokal oder Foodtruck......Ich bin selbst von Zölliakie betroffen und ernähre mich schon lange Jahre aus Überzeugung nur mit Bioprodukten.
            <br />
                Mein Traum war es, Speisen anzubieten, die bio und glutenfrei sind, sodass jeder ohne Bedenken gut und gesund essen kann.</p>
            <h3 className="callout-text lg-text">Food & Art</h3>
            <h4 className="callout-text lg-text">Food & Art zusammen? Natürlich!</h4>
            <p>
                <StaticImage src="../images/biofoodtruck-logo.jpg" alt="Bio Foodtruck food and art logo" />
            </p>
            <p>
                <a href="http://www.schlaffer.net/" target="_blank" rel="noopener noreferrer">Karina Schlaffer - Atelier 21</a>
            </p>
            <Biologo />
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default AboutUs
