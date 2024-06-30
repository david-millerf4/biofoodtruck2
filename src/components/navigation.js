import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Navigation = () => {

    return (
        <Row className="global-header">
            <Col xs={12} md={6} className="w-25 p-3">
                <Link to="/"><StaticImage src="../images/biofoodtruck-logo.jpg" alt="biofoodtruck logo" width={110} /></Link>
            </Col>
            <Col className="px-0">
                <Row className="mx-0">
                    <Col className="header-bg">
                        <StaticImage src="../images/Headerhome.png" alt="speise exemplar" height={100} width={600} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Navbar expand="lg" className="header-nav py-0">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-3" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-1    ">
                                    <Link to="/" className="header-nav-link">Home</Link>
                                    <Link to="/catering" className="header-nav-link">Bio catering</Link>
                                    <Link to="/foodtruck" className="header-nav-link">Bio foodtruck</Link>
                                    <Link to="/aboutUs" className="header-nav-link">about us</Link>
                                    <Link to="/kontakt" className="header-nav-link">kontakt</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Navigation;
