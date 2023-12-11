import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'

const Footer = () => {

    return (
        <Row as="footer">
            <Col>
                &copy; Copyright {new Date().getFullYear()} Ruza Nera Bio Foodtruck &amp; Bio Catering |
                <Link to="/impressum"> Impressum</Link> |
                <Link to="/datenschutz"> Datenschutz</Link>
            </Col>
            <Col className="footer-social">
                <ul>
                    <li>Follow us:</li>
                    <li><a href="https://www.facebook.com/biofoodtruck/" target="_blank" rel="noopener noreferrer" className="social-icons social-facebook"><StaticImage src="../images/bookfaceIcon.png" alt="facebook logo" /></a></li>
                    <li><a href="https://twitter.com/RuzaNera" target="_blank" rel="noopener noreferrer" className="social-icons social-twitter"><StaticImage src="../images/Twitter_Social_Icon_Rounded_Square_Color.png" alt="twitter logo" /></a></li>
                    <li><a href="https://www.instagram.com/derbiofoodtruck/" target="_blank" rel="noopener noreferrer" className="social-icons social-instagram"><StaticImage src="../images/instaIcon.png" alt="instagram logo" /></a></li>
                </ul>
            </Col>
        </Row>
    )
}

export default Footer