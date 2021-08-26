import React from 'react';
import '../../App.css';
import Portfolio from '../Portfolio';
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap';
import maarkedal from '../../assets/goethals/6.JPG'
import maarkedal2 from '../../assets/goethals/Goethals-gevel3.jpeg'
import maarkedal3 from '../../assets/goethals/Goethals-gevel7.jpeg'


function Maarkedal() {
  return (
    <>
      <Portfolio />
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={maarkedal}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={maarkedal2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={maarkedal3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Maarkedal;