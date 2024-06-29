import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Biologo from "../components/biologo"

const Foodtruck = ({ location }) => {
    return (
        <Layout location={location}>
            <h1 className="callout-text xl-text">BioFoodtruck</h1>
            <p className="text-center" style={{ fontFamily: "arial, helvetica, sans-serif" }}>
                Ausser auf speziellen Caterings, Events, finden Sie unseren Bio-Truck auf Konzerten,
                <br />Festivals, Brauereien, Strassenecken in München und Umgebung.
                <br />Unsere Küche auf Rädern bietet frisches und gesundes Streetfood vor Ort  mit kurzen Wartezeiten.
                <br />Ob auf einem Waldweg, in einem schwabinger Innenhof
                <br />oder auf einer saftiggrünen Wiese in Oberbayern……wir kommen überall hin….
            </p>
            <h2 className="callout-text lg-text">
                Klappe auf und los gehts...<br />schnelle, gehobene Küche<br />immer frisch, immer bio, immer glutenfrei
            </h2>
            <h3 className="callout-text lg-text">
                Mit einem wechselnden saisonalen, frischen Bio-Speisenangebot.
            </h3>
            <h3 className="callout-text lg-text">
                Alles aus 100% Kontrolliert Biologischem Anbau
            </h3>
            <h3>AKTUELLE SPEISEKARTE</h3>
            <h4 className="callout-text lg-text">Gutes vom Grill, aus dem Topf und aus der Pfanne. Ois <strong>Bio</strong> und glutenfrei. Ois hausgemacht.</h4>
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
            <p>
                <StaticImage src="../images/bft_burger_frisch.jpg" alt="Big juicy burger - Lecker!" height="700" />
            </p>
            <Biologo />
        </Layout>
    )
}

export const Head = () => <Seo title="Foodtruck" />

export default Foodtruck
