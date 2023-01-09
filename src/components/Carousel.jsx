import React, { useState } from 'react';

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = props;
  const totalImages = images.length;

  function goToPrevSlide() {
    setCurrentIndex((currentIndex - 3 + totalImages) % totalImages);
  }

  function goToNextSlide() {
    setCurrentIndex((currentIndex + 3) % totalImages);
  }

  return (
    <div className="carousel">
      <div className="images">
      {images.slice(currentIndex, currentIndex + 3).map((image) => (
        <img src={image} alt="" key={image} />
      ))}
      </div>
      <div className="carousel-btns">
        <div className="carousel-btn"></div>
        <div className="carousel-btn active"></div>
        <div className="carousel-btn"></div>
        <div className="carousel-btn"></div>
        <div className="carousel-btn"></div>
        <div className="carousel-btn"></div>
        <div className="carousel-btn"></div>
        <div className="carousel-btn"></div>
        <div className="carousel-btn"></div>
        <div className="carousel-btn"></div>
        <div className="carousel-btn"></div>
        <div className="carousel-btn"></div>
        <div className="carousel-btn"></div>
      </div>
    </div>
  );

}

export default Carousel