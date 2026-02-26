import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import groot from '../../assets/images/groot.jpg';
import spider from '../../assets/images/spider-man.jpg';
import vadar from '../../assets/images/darth-vadar.jpg';

function Sliders() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      fade
      interval={3000}        // 3 seconds auto slide
      ride="carousel"
      pause={false}          // keeps sliding even on hover
      indicators={true}
      controls={true}
    >

      {/* Slide 1 */}
      <Carousel.Item>
        <div className="position-relative">
          <img
            className="d-block w-100"
            src={groot}
            alt="Groot"
            style={{ height: "85vh", objectFit: "cover" }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          <Carousel.Caption className="text-start mb-5">
            <h1 className="fw-bold display-4">Exclusive Deals</h1>
            <p className="lead">Shop the latest collections at Sabka Mall</p>
            <button className="btn btn-danger btn-lg">Shop Now</button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className="position-relative">
          <img
            className="d-block w-100"
            src={spider}
            alt="Spider Man"
            style={{ height: "85vh", objectFit: "cover" }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          <Carousel.Caption className="text-start mb-5">
            <h1 className="fw-bold display-4">Trending Products</h1>
            <p className="lead">Don’t miss today’s best offers</p>
            <button className="btn btn-danger btn-lg">Explore</button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div className="position-relative">
          <img
            className="d-block w-100"
            src={vadar}
            alt="Darth Vadar"
            style={{ height: "85vh", objectFit: "cover" }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          <Carousel.Caption className="text-start mb-5">
            <h1 className="fw-bold display-4">New Arrivals</h1>
            <p className="lead">Upgrade your style with premium collections</p>
            <button className="btn btn-danger btn-lg">Discover</button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default Sliders;