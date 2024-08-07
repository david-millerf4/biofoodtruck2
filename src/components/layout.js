import * as React from "react"
import Navigation from "./navigation"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Footer from "./footer"
import Col  from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  let page = (
        <Row>
            {children}
        </Row>
    )

    return (
        <Container fluid className="gx-0 mt-4" style={{maxWidth: "1024px"}}>
            <Navigation />
            <Col className="page-layout">
                {page}
            </Col>
            <Footer />
        </Container>
  )
}

export default Layout
