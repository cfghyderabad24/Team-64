import React from 'react';
import './Carosal.css'

const Carousal = () => {
  return (
    <div id="carouselContent" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active text-center p-4">
          <img src="C:\Users\parju\OneDrive\Desktop\HTML_PRACTICE\Team-64\frontend\client\src\assets\pw-1.jpg" alt="img" className="carousel-image" />
        </div>
        <div className="carousel-item text-center p-4">
          <img src="\assets\pw-2.jpg" alt="img" className="carousel-image" />
        </div>
        <div className="carousel-item text-center p-4">
          <img src="/assets/pw-1.jpg" alt="img" className="carousel-image" />
        </div>
      </div>
      {/* Carousel controls */}
      <a className="carousel-control-prev" href="#carouselContent" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselContent" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousal;