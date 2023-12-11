import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Navigation = () => {

    return (
        <Col className="mb-4">
            <Navbar expand="lg" className="header-nav global-header">
                <Navbar.Brand href="/" className="header-logo">
                    <StaticImage src="../images/biofoodtruck-logo.jpg" width="110" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-3" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="header-nav-link styled-link">Home</Link>
                        <Link to="/catering" className="header-nav-link styled-link">Bio catering</Link>
                        <Link to="/foodtruck" className="header-nav-link styled-link">Bio foodtruck</Link>
                        <Link to="/kalendar" className="header-nav-link styled-link">kalender</Link>
                        <Link to="/aboutUs" className="header-nav-link styled-link">about us</Link>
                        <Link to="/kontakt" className="header-nav-link styled-link">kontakt</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    );
};

export default Navigation;
