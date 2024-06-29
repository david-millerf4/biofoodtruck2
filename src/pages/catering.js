import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Catering = ({ location }) => {
    return (
        <Layout location={location}>
            <h1 className="callout-text xl-text">Bio Catering</h1>
            <div>
                <h2 className="callout-text lg-text">alles bio - frisch - möglichst regional - glutenfrei</h2>
                <p className="text-center" style={{fontFamily: "arial, helvetica, sans-serif"}}>
                    <br />Unser Profikoch kreiert in unserem Biofoodtruck jedes Menue speziell für Sie und Ihren Event.
                    <br />Ob eine Hochzeit, Geburtstag, Büro, ein 4-Gänge-Menue ab 30 Personen
                    <br />oder ein BBQ mit eigens aufgestelltem Grill.
                            Wir haben die richtige Lösung für Sie.
                    <br />Zusätzlich bieten wir künstlerische Unterhaltung an (z.B. Karikaturzeichnen, Piano-Livemusik, Kinderschminken...) <a rel="noopener noreferrer" target="_blank" href="http://www.schlaffer.net">www.schlaffer.net</a>
                </p>
                <h2 className="callout-text lg-text">Beispielmenues</h2>
                <h3 className="callout-text lg-text">Fingerfood - Steaks - Grill - Burger - Tapas - Suppen - Pasta - Kuchen - Desserts - Salate ............</h3>
                <p>
                    <StaticImage src="../images/Hamburgermediterran2.jpg" alt="Lecker Hamburger Mediterran" title="Lecker Hamburger Mediterran" />
                </p>
                <h2 className="callout-text lg-text">Bio Foodtruck Catering für Ihr Event.</h2>
                <h2 className="callout-text lg-text">Bitte <Link to="../kontakt">kontaktieren</Link> Sie uns. Wir erstellen Ihnen ein indivuelles Angebot.
                <br /><a href="mailto:biofoodtruck@web.de">biofoodtruck@web.de</a>.</h2>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

                    export default Catering
