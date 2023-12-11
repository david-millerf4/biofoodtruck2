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
            <p>Ausser auf speziellen Caterings und Events, finden Sie unseren <strong>Bio-Truck</strong> auf Konzerten, Festivals, Strassenecken und Hinterhöfen in München und Umgebung.
                <br />Unsere Küche auf Rädern bietet frisches und gesundes Bio-Streetfood vor Ort mit kurzen Wartezeiten.
                <br />Ob auf einem Waldweg, in einem Schwabinger Innenhof oder auf einer saftiggrünen Wiese in Oberbayern……wir kommen überall hin.
            </p>
            <StaticImage src="../images/bft_o2.jpg" alt="Business skyline with foodtruck side" style={{ width: `50%`, height: `25rem` }} />

            <Row className="inline-quote">
                <Col className="inline-quote" lg={{ span: 5, offset: 3 }}>
                <p>Klappe auf und los gehts...<br />schnelle, gehobene Küche<br />immer frisch, immer bio, immer glutenfrei</p>
                <p>Mit einem wechselnden saisonalen, frischen Bio-Speisenangebot.</p>
                </Col>
            </Row>
                <p><StaticImage src="../images/bft_okoP2.jpg" alt="Bio Foodtruck bei OkoP" style={{ width: `70%` }} /></p>

            <h3>AKTUELLE SPEISEKARTE</h3>
            <p>Gutes vom Grill, aus dem Topf und aus der Pfanne. Ois <strong>Bio</strong> und glutenfrei. Ois hausgemacht.</p>
            <StaticImage src="../images/WochenkarteJuni28-19..jpg" alt="Speisekarte examplar" />
            <p>Hier ein paar Bilder von unseren Speisen:</p>
            <p>
                <br />Wir sind <strong className="bio-grun">100% Bio-Zertifiziert</strong>.
                <br />Alle Speisen sind aus <strong className="bio-grun">100% Bio-Produkten</strong>.
            </p>
            <ul>
                <li>Hackbällchen (<strong className="bio-grun">100 % Biorind</strong>) mit Gemüsesugo und Pasta</li>
                <li>Veggi-Burger mit Grillgemüse und Mozzarella</li>
                <li>Linseneintopf mit Süsskartoffel und Ingwer</li>
                <li>Hirtensalat</li>
                <li>mediterraner Quinoasalat</li>
                <li>Hamburger Classic (<strong className="bio-grun">100 % Biorind</strong>)</li>
                <li>Hamburger mediterrano (<strong className="bio-grun">100 % Biorind</strong>)</li>
                <li>vegetarische und vegane Tapas</li>
                <li>Bärlauchbratwürste</li>
                <li><strong>Now</strong> Getränke von Lammsbräu</li>
            </ul>

            <h3>Hier die aktuellen Speisen:</h3>
            <p><StaticImage src="../images/bft-burgerHero.jpg" alt="Big juicy burger - Lecker!" style={{ width: `60%` }} /></p>
            <Biologo />
        </Layout>
    )
}

export const Head = () => <Seo title="Foodtruck" />

export default Foodtruck
