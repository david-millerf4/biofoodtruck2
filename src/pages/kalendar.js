import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Biologo from "../components/biologo"

const Kalendar = ({ location }) => {
    return (
        <Layout location={location}>
            <h1>Kalendar</h1>
            <Row>
                <Col className="mb-4">
                <h2>Hier sind wir unterwegs in 2023...!</h2>
                    <hr className="prime"></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table responsive bordered striped hover size="sm">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Type</th>
                                <th>Class</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>08/10/23</td>
                                <td>World of Bio, Haar</td>
                                <td>Foodtruck</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>12/10/23</td>
                                <td>Ascheim</td>
                                <td>Catering</td>
                                <td>Privat</td>
                            </tr>
                            <tr>
                                <td>27/11/23</td>
                                <td>Ottobrun</td>
                                <td>Catering</td>
                                <td>Privat</td>
                            </tr>
                            <tr>
                                <td>14/12/23</td>
                                <td>München</td>
                                <td>Catering</td>
                                <td>Privat</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <StaticImage id="Karte" src="../images/bft_okoP2.jpg" alt="" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <StaticImage id="Karte" src="../images/bft_okoP1.jpg" alt="" />
                </Col>
            </Row>

            
            <Biologo />
        </Layout>
    )
}

export const Head = () => <Seo title="Kalendar" />

export default Kalendar