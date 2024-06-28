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
        </Row>
    )
}

export default Footer
