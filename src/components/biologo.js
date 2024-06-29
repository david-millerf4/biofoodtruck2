import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'

const Biologo = () => {

    return (
        <Row className="justify-content-center">
            <Col className="bio-logo">
                <StaticImage src="../images/biofoodtruck-oko-logo-cr.png" alt="german and european union bio icons" width="497" />
                <h4 className="bio-img-kontrol-text">Kontrolliert durch</h4>
                <h4 className="xl-text">DE-ÖKO-037</h4>
            </Col>
        </Row>
    )
}

export default Biologo