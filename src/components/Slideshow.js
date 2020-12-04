import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 
const slideImages = [
  '/images/nature1.jpg',
  '/images/nature1.jpg',
  '/images/nature1.jpg'
];

const handleScroll = () =>{
  document.getElementById("scroll-target").scrollIntoView({behavior: "smooth"});
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <div className="slide-title">
          <h1>LOREM IPSUM</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <button className="arrow-down" onClick={ () => handleScroll()}></button>
        </div>
        <Slide arrows={false} indicators={true}>
          <div className="each-slide">
            <div className="slide-image-container" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide-image-container"  style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide-image-container"  style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;