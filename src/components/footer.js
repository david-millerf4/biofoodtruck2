import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <Row as="footer" className="justify-content-md-center">
            <Col md="auto">                                            
                &copy; Copyright {new Date().getFullYear()} {data.site?.siteMetadata.title || `Title`} |
                <Link to="/impressum" className="styled-link">&nbsp;Impressum</Link> |
                <Link to="/datenschutz" className="styled-link">&nbsp;Datenschutz</Link>
            </Col>
            <Col className="footer-social" md="auto">
                <ul>
                    <li>Follow us:</li>
                    <li><a href="https://www.facebook.com/biofoodtruck/" target="_blank" rel="noopener noreferrer" className="social-icons"><StaticImage src="../images/bookfaceIcon.png" alt="facebook logo" /></a></li>
                    <li><a href="https://twitter.com/RuzaNera" target="_blank" rel="noopener noreferrer" className="social-icons"><StaticImage src="../images/Twitter_Social_Icon_Rounded_Square_Color.png" alt="twitter logo" /></a></li>
                    <li><a href="https://www.instagram.com/derbiofoodtruck/" target="_blank" rel="noopener noreferrer" className="social-icons"><StaticImage src="../images/instaIcon.png" alt="instagram logo" /></a></li>
                </ul>
            </Col>
        </Row>
    )
}

export default Footer
