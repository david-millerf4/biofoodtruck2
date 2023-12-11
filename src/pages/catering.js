import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Catering = ({ location }) => {
    return (
        <Layout location={location}>
            <h1>Bio Catering</h1>
            <div>
                <h3>alles bio - frisch - möglichst regional - glutenfrei</h3>
                <p>Unser Profikoch kreiert in unserem Biofoodtruck jedes Menü speziell für Sie und Ihr Event.
                    <br />Ob eine Hochzeit, Geburtstag, Büro, ein 4-Gänge-Menue ab 30 Personen oder ein BBQ mit eigens aufgestelltem Grill. Wir haben die richtige Lösung für Sie.
                </p>
                <p>
                    Zusätzlich bieten wir künstlerische Unterhaltung an (z.B. Karikaturzeichnen, Piano-Livemusik, Kinderschminken...) <a rel="noopener noreferrer" target="_blank" href="http://www.schlaffer.net">www.schlaffer.net</a>
                </p>
                <h2>Beispielmenues</h2>
                <p>Fingerfood - Steaks - Grill - Burger - Tapas - Suppen - Pasta - Kuchen - Desserts - Salate ............</p>
                <h4>Foodtruck Catering für Ihr Event.</h4>
                <p>Bitte <Link to="../kontakt">kontaktieren</Link> Sie uns. Wir erstellen Ihnen ein indivuelles Angebot <a href="mailto:biofoodtruck@web.de">biofoodtruck@web.de</a>.</p>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default Catering
