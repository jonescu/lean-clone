import React, { useState } from 'react';

function Carousel(props) {
  const { images } = props;
  let currentIndex = 0;
  const totalImages = images.length;
  const imgs = document.querySelector('.image-container')
  const slides = [0,1,2,3,4]

  // function changeImage(e, idx) {
  //   setCurrentIndex(idx)
  //   console.log(idx, currentIndex)
  //   const carouselBtns = document.querySelectorAll('.carousel-btn')
  //   if(idx < currentIndex) {
  //     imgs.setAttribute('style', "transform: translateX(-1000px)")
  //   } else if (idx > currentIndex) {
  //     imgs.setAttribute('style', "transform: translateX(1000px)")
  //   }
  //   carouselBtns.forEach(btn => {
  //     if(btn.classList.contains('active')) {
  //       btn.classList.remove('active')
  //     }
  //   })
  //   e.target.classList.add('active')
  // }

  function setIndex (idx) {
    currentIndex = idx
    console.log(idx, currentIndex)
  }


  return (
    <div className="carousel">
        <div className="image-container">
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo3.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo4.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo5.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo6.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo7.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo9.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo10.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo12.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo11.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo13.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo1.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo2.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/08/1-3.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/08/2-3.png" alt="" />
        </div>
      <div className="carousel-btns">
        {slides.map((slide, idx) => (
          <div className="carousel-btn" onClick={() => setIndex(idx)} key={idx}></div>
        ))}
      </div>
    </div>
  );

}

export default Carousel