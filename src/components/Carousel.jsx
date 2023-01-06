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
      <button onClick={goToPrevSlide}>Prev</button>
      {images.slice(currentIndex, currentIndex + 3).map((image) => (
        <img src={image} alt="" key={image} />
      ))}
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );

}

export default Carousel