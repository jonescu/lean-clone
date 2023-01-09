import React, { useState } from 'react';

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = props;
  const totalImages = images.length;

  function changeImage(e, idx) {
    setCurrentIndex(idx)
    const carouselBtns = document.querySelectorAll('.carousel-btn')
    carouselBtns.forEach(btn => {
      if(btn.classList.contains('active')) {
        btn.classList.remove('active')
      }
    })
    e.target.classList.add('active')
  }

  return (
    <div className="carousel">
      <div className="images">
      {images.slice(currentIndex, currentIndex + 3).map((image) => (
        <img src={image} alt="" key={image} />
      ))}
      </div>
      <div className="carousel-btns">
        {images.map((img, idx) => (
          <div className='carousel-btn' onClick={(e) => changeImage(e, idx)}></div>
        ))}
      </div>
    </div>
  );

}

export default Carousel