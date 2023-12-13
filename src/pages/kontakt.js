import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Kontakt = ({ location }) => {
    return (
        <Layout location={location}>
            <h1>Kontakt</h1>
            <h2>RuzaNera Food &amp; Art Biofoodtruck</h2>
            <p>
                Wir sind <span className="bio-grun">100% Bio-zertifiziert</span>
            </p>
            <div className="bio-logo">
                <StaticImage src="../images/biofoodtruck-oko-logo-cr.png" alt="bio image" />
                <h4 className="bio-img-kontrol-text">Kontrolliert durch DE-ÖKO-037</h4>
            </div>
            <div className="contact-data">
                <h3>Bio Foodtruck & Catering Ruza Nera</h3>
                <div>
                    Ruza Nera Food&Art Foodtruck<br />
                    Karina Schlaffer<br />
                    Edeltraudstr. 21<br />
                    81827 München<br />
                    <hr style={{ width: `15rem` }} />
                    <b>Tel.: </b>0 89 / 92 58 23 09<br />
                    <b>Mobil: </b>0 15 25 33 79 376
                    <hr style={{ width: `15rem` }} />
                    <b>E-Mail: </b><a href="mailto:biofoodtruck@web.de">biofoodtruck@web.de</a>
                </div>
                <ul className="kontakt-social">
                    <li>Follow us:</li>
                    <li><a href="https://www.facebook.com/biofoodtruck/" target="_blank" rel="noopener noreferrer" className="social-icons social-facebook"><StaticImage src="../images/bookfaceIcon.png" alt="facebook logo" /></a></li>
                    <li><a href="https://twitter.com/RuzaNera" target="_blank" rel="noopener noreferrer" className="social-icons social-twitter"><StaticImage src="../images/Twitter_Social_Icon_Rounded_Square_Color.png" alt="twitter logo" /></a></li>
                    <li><a href="https://www.instagram.com/derbiofoodtruck/" target="_blank" rel="noopener noreferrer" className="social-icons social-instagram"><StaticImage src="../images/instaIcon.png" alt="instagram logo" /></a></li>
                </ul>
            </div>
            <div className="contact-data">
                <h3>Art</h3>
                <p>
                    <b>URL: </b><a href="http://www.schlaffer.net/" target="_blank" rel="noopener noreferrer">Karina Schlaffer - Atelier 21</a>
                </p>
                <p>
                    <b>Email: </b><a href="mailto:kschlaffer@web.de">kschlaffer@web.de</a>
                </p>
            </div>
            <StaticImage id="Truck2" src="../images/bft-gruene.jpg" alt="biofoodtruck mit Grün partie" style={{ width: `70%` }} />
        </Layout>
    )
}

export const Head = () => <Seo title="Kontakt" />

export default Kontakt
