import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Biologo from "../components/biologo"

const AboutUs = ({ location }) => {
    return (
        <Layout location={location}>
            <h1>Über uns</h1>
                <h2>Wir sind ein Biofoodtruck.</h2>
                <h3 >Das bedeutet:</h3>
                <ul>
                    <li>dass wir nur mit <strong>zertifizierter</strong> Bioware kochen</li>
                    <li>Ohne Zusatzstoffe und Geschmacksverstärker</li>
                    <li>Das Fleisch kommt ausschliesslich von <strong>biozertifizierten</strong> Höfen, auf denen die Tiere ein artgerechtes Leben haben</li>
                    <li>Das Gemüse und Obst wird nicht mit Pestiziden oder anderen giftigen Stoffen behandelt</li>
                    <li>Unsere Speisen sind <strong className="bio-grun">100% Bio-zertifiziert</strong>, glutenfrei, und laktosefrei</li>
                </ul>
            <Biologo />
            <Row>
                <Col>
                    <h2>Wir sind ein Familienunternehmen</h2>
                    <hr className="prime"></hr>
                </Col>
            </Row>
           
            <Row>
                <Col>
                    <StaticImage id="Truck1" src="../images/bft-gruene-profile.jpg" alt="Karina and Zoran" />
                </Col>
                <Col>
                    <StaticImage id="Truck2" src="../images/aboutKT.jpg" alt="Bio foodtruck family" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Meine Schwester backt mit viel Leidenschaft, glutenfreie CupCakes, Brownies und vieles mehr.</p>
                    <p>Zoran ist unser Profikoch, er zaubert schmackhafte Speisen.</p>
                    <p>Ich hatte die Idee von einem Lokal oder Foodtruck......Ich bin selbst von Zölliakie betroffen und ernähre mich schon lange Jahre aus Überzeugung nur mit Bioprodukten.</p>
                    <p>Mein Traum war es, Speisen anzubieten, die bio und glutenfrei sind, sodass jeder ohne Bedenken gut und gesund essen kann.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Food & Art</h3>
                    <hr className="prime"></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Food & Art zusammen? Natürlich!</h4>
                    <p><StaticImage src="../images/biofoodtruck-logo.jpg" alt="Bio Foodtruck food and art logo" /></p>
                    <p>Mein andere leben als Diplom Grafik-Designerin: <a href="http://www.schlaffer.net/" target="_blank" rel="noopener noreferrer">Karina Schlaffer - Atelier 21</a></p>
                </Col>
            </Row>
            <p>
            <StaticImage src="../images/biofoodtruck-art-beispiel-schlaffernet.png" alt="beispiel grafik art from schlaffer net" />
            </p>
            
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default AboutUs
