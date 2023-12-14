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
        <Container fluid className="gx-0">
            <Navigation />
            <Col lg={{ span: 8, offset: 2 }} className="page-non-root-layout px-4">
                {page}
            </Col>
            <Footer />
        </Container>
  )
}

export default Layout
