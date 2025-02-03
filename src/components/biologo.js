import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'

const Biologo = () => {

    return (
        <Row className="justify-content-center">
            <Col className="bio-logo">
                <StaticImage src="../images/biofoodtruck-oko-logo-de-cr.png" alt="german and european union bio icons" width={266} />
                <p className="lg-text bio-img-kontrol-text mb-0" style={{fontFamily: "arial, helvetica, sans-serif"}}>Kontrolliert durch</p>
                <h4 className="xl-text">DE-ÖKO-037</h4>

                <h4 className="lg-text" style={{fontFamily: "arial, helvetica, sans-serif"}}>
                    Wir sind <strong>100% Bio-zertifiziert Seit 2017</strong>
                </h4>
            </Col>
        </Row>
    )
}

export default Biologo