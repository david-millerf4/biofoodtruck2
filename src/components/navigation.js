import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Navigation = () => {

    return (
        <Col className="mb-4 global-header">
            <Row className="gx-0">
                <Col className="some-background">
                    hi
                </Col>
            </Row>
            <Navbar expand="lg" className="header-nav py-0">
                {/* <Navbar.Brand href="/" className="header-logo">
                    <StaticImage src="../images/biofoodtruck-logo.jpg" width="110" />
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-3" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="header-nav-link">Home</Link>
                        <Link to="/catering" className="header-nav-link ">Bio catering</Link>
                        <Link to="/foodtruck" className="header-nav-link">Bio foodtruck</Link>
                        <Link to="/aboutUs" className="header-nav-link">about us</Link>
                        <Link to="/kontakt" className="header-nav-link">kontakt</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    );
};

export default Navigation;
