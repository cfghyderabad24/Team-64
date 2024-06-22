import React from 'react';
import './Carosal.css'
import pw1 from '../../assets/pw-1.jpg'
import pw2 from '../../assets/pw-2.jpg'
import pw3 from '../../assets/pw-3.jpg'

const Carosal = () => {
  return (
    <div id="carouselContent" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active text-center p-4">
          <img src={pw1} alt="img" className="carousel-image" />
        </div>
        <div className="carousel-item text-center p-4">
          <img src={pw2} alt="img" className="carousel-image" />
        </div>
        <div className="carousel-item text-center p-4">
          <img src={pw3} alt="img" className="carousel-image" />
        </div>
      </div>
      {/* Carousel controls */}
      <a className="carousel-control-prev" href="#carouselContent" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
        <span className="sr-only text-dark">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselContent" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only text-dark">Next</span>
      </a>
    </div>
  );
};

export default Carosal;