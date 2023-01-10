import React, { useRef } from 'react';

function Carousel(props) {
  const { images } = props;
  let currentIndex = 0;
  const totalImages = images.length;
  const divRef = useRef()
  const carouselBtns = document.querySelectorAll('.carousel-btn')
  const slides = [0,1,2,3,4]

  // let interval = setInterval(run, 2000) 

  // function run() {
  //   currentIndex++

  //   setIndex(currentIndex)
  // }

  // function resetInterval() {
  //   clearInterval(interval)
  //   interval = setInterval(run, 2000)
  // }

  function setIndex (e, idx) {
    currentIndex = idx
    divRef.current.style.transform = `translateX(${-currentIndex * 1200}px)`
    if(currentIndex > images.length -1) {
      currentIndex = 0
    }
    carouselBtns.forEach(btn => {
      if(btn.classList.contains('active')) {
        btn.classList.remove('active')
      }
    })
    e.target.classList.add('active')
    // resetInterval()
  }


  return (
    <div className="carousel">
        <div className="image-container" ref={divRef}>
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo3.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo4.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo5.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo6.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo7.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo9.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo10.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo12.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo11.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo13.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo1.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/05/logo2.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/08/1-3.png" alt="" /><img src="https://leanexcellence.ca/wp-content/uploads/2022/08/2-3.png" alt="" />
        </div>
      <div className="carousel-btns">
        {slides.map((slide, idx) => (
          <div className="carousel-btn" onClick={(e) => setIndex(e, idx)} key={idx}></div>
        ))}
      </div>
    </div>
  );

}

export default Carousel