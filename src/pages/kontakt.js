import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Biologo from "../components/biologo"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Kontakt = ({ location }) => {
    return (
        <Layout location={location}>
            <h1>Kontakt</h1>
            <h2>RuzaNera Food &amp; Art Biofoodtruck</h2>
            <p>
                Wir sind <strong>100% Bio-zertifiziert Seit 2017</strong>
            </p>
            <Biologo />
                <h3>Bio Foodtruck & Catering Ruza Nera</h3>
                <Row>
                    <Col lg={{ span: 4 }}>
                        <address>
                            <strong>Ruza Nera Food&Art Foodtruck</strong><br />
                            Karina Schlaffer<br />
                            Edeltraudstr. 21<br />
                            81827 München<br />
                            <b>Tel.: </b>0 89 / 92 58 23 09<br />
                            <b>Mobil: </b>0 15 25 33 79 376
                            <b>E-Mail: </b><a href="mailto:biofoodtruck@web.de">biofoodtruck@web.de</a>
                        </address>
                    </Col>
                </Row>
                <Row>
                    <Col className="my-4 py-4" lg={{ span: 8 }}>
                        <h2>Social</h2>
                        <hr className="prime" />
                        <ul className="kontakt-social">
                            <li>Follow us:</li>
                            <li><a href="https://www.facebook.com/biofoodtruck/" target="_blank" rel="noopener noreferrer" className="social-icons social-facebook"><StaticImage src="../images/bookfaceIcon.png" alt="facebook logo" /></a></li>
                            <li><a href="https://twitter.com/RuzaNera" target="_blank" rel="noopener noreferrer" className="social-icons social-twitter"><StaticImage src="../images/Twitter_Social_Icon_Rounded_Square_Color.png" alt="twitter logo" /></a></li>
                            <li><a href="https://www.instagram.com/derbiofoodtruck/" target="_blank" rel="noopener noreferrer" className="social-icons social-instagram"><StaticImage src="../images/instaIcon.png" alt="instagram logo" /></a></li>
                        </ul>
                    </Col>
                </Row>
            <Row>
                <Col className="my-4 py-4" lg={{ span: 10 }}>
                    <h2>Art</h2>
                    <hr className="prime" />
                    <p>
                        <b>URL: </b><a href="http://www.schlaffer.net/" target="_blank" rel="noopener noreferrer">Karina Schlaffer - Atelier 21</a>
                    </p>
                    <p>
                        <b>Email: </b><a href="mailto:kschlaffer@web.de">kschlaffer@web.de</a>
                    </p>
                </Col>
            </Row>
            <p>
                <StaticImage id="Truck2" src="../images/bft-sandNight.jpg" alt="image of biofoodtruck at night with klappe auf and lighted" width="800" />
            </p>
            <p>
                <StaticImage id="Truck2" src="../images/bft-gruene.jpg" alt="biofoodtruck mit Grün partie" width="700" />
            </p>
        </Layout>
    )
}

export const Head = () => <Seo title="Kontakt" />

export default Kontakt
