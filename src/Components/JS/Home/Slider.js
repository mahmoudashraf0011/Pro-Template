import { Carousel } from 'react-bootstrap'
import React from 'react'
import "./../../Styles/Home/Slider.css"
import s1 from "./../../../images/slider/1.avif"
import s2 from "./../../../images/slider/2.jpg"
import s3 from "./../../../images/slider/3.jpg"
import s4 from "./../../../images/slider/4.jpg"

export default function Slider() {
  return (
    <section className='slider'>
        <Carousel data-bs-theme="white">
            <Carousel.Item className='slider-bg'>
                <img 
                className="d-block w-100"
                src={s3}
                alt="First slide"
                />
                <Carousel.Caption className='slider-data'>
                <h5>Sale Up t0 30% Off</h5>
                <p> Elevate Your Basics with a Touch of Glam.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slider-bg'>
                <img
                className="d-block w-100"
                src={s1}
                alt="Second slide"
                />
                <Carousel.Caption className='slider-data'>
                <h5>Limited Offer Up To 50%</h5>
                <p> Elevate Your Basics with a Touch of Glam.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slider-bg'>
                <img
                className="d-block w-100"
                src={s2}
                alt="Third slide"
                />
                <Carousel.Caption className='slider-data'>
                <h5>Sale Up t0 10% Off</h5>
                <p>
                Elevate Your Basics with a Touch of Glam.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slider-bg'>
                <img
                className="d-block w-100"
                src={s4}
                alt="Forth slide"
                />
                <Carousel.Caption className='slider-data'>
                <h5>Special Offer Up To 70%</h5>
                <p>
                Elevate Your Basics with a Touch of Glam.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </section>
  )
}
