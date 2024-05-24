import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Biologo from "../components/biologo"
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'

const Foodtruck = ({ location }) => {
    return (
        <Layout location={location}>
            <h1>BioFoodtruck</h1>
            <p>
                Ausser auf speziellen Caterings und Events, finden Sie unseren <strong>Bio-Foodtruck</strong> auf Konzerten, Festivals, Strassenecken und Hinterhöfen in München und Umgebung.
            </p>
            <Row className="my-4">
                <Col lg={{ span: 7 }}>
                    <p>
                        Unsere Küche auf Rädern bietet frisches und gesundes Bio-Streetfood vor Ort mit kurzen Wartezeiten.
                    </p>
                    <p>Ob auf einem Waldweg, in einem Schwabinger Innenhof oder auf einer saftiggrünen Wiese in Oberbayern……wir kommen überall hin.</p>
                    
                    <Col>
                        <p>Klappe auf und los gehts...<br />schnelle, gehobene Küche<br />immer frisch, immer bio, immer glutenfrei</p>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Mit einem wechselnden saisonalen, frischen Bio-Speisenangebot.</p>
                    <p>
                        Alles aus 100% Kontrolliert Biologischem Anbau
                    </p>
                </Col>
            </Row>
            <h3>AKTUELLE SPEISEKARTE</h3>
            <p>Gutes vom Grill, aus dem Topf und aus der Pfanne. Ois <strong>Bio</strong> und glutenfrei. Ois hausgemacht.</p>
            <div><StaticImage src="../images/WochenkarteJuni28-19..jpg" alt="Speisekarte examplar" /></div>
            <p>Hier ein paar Bilder von unseren Speisen:</p>
            <p>
                <br />Wir sind <strong>100% Bio-Zertifiziert</strong>.
                <br />Alle Speisen sind aus <strong>100% Bio-Produkten</strong>.
            </p>
            <ul>
                <li>Hackbällchen (<strong>100 % Biorind</strong>) mit Gemüsesugo und Pasta</li>
                <li>Veggi-Burger mit Grillgemüse und Mozzarella</li>
                <li>Linseneintopf mit Süsskartoffel und Ingwer</li>
                <li>Kurbis Ingwer Kokonuss Suppe</li>
                <li>Hirtensalat</li>
                <li>mediterraner Quinoasalat</li>
                <li>Hamburger Classic (<strong>100 % Biorind</strong>)</li>
                <li>Hamburger mediterrano (<strong>100 % Biorind</strong>)</li>
                <li>vegetarische und vegane Tapas</li>
                <li>Bärlauchbratwürste</li>
                <li>Hänhchenspiese</li>
                <li>Glutenfrei Brownies</li>
                <li>Zitrone Cupcakes</li>
                <li><strong>Now</strong> Getränke von Lammsbräu</li>
            </ul>

            <h3>Hier die aktuellen Speisen:</h3>
            <p><StaticImage src="../images/bft_burger_frisch.jpg" alt="Big juicy burger - Lecker!" height="700" /></p>
            <Biologo />
        </Layout>
    )
}

export const Head = () => <Seo title="Foodtruck" />

export default Foodtruck
