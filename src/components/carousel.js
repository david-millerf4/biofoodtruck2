import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from 'react-bootstrap/Carousel'

const Slideshow = () => {

    return (
        <Carousel fade>
            <Carousel.Item>
                <StaticImage src="../images/suppe.png" alt="Kurbis Ingwer Kokonuss Suppe" />
                <Carousel.Caption>
                    <h3>Kurbis Ingwer Suppe</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <StaticImage src="../images/Hamburgermediterran2.jpg" alt="Hamburger Mediterran" layout="fixed" />
                <Carousel.Caption>
                    <h3>Hamburger Mediterran</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <StaticImage src="../images/GurkenHaeppchenkl.jpg" alt="Gurken Häppchen" />
                <Carousel.Caption>
                    <h3>Gurken Häppchen</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slideshow