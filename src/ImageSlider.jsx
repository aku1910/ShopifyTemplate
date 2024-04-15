import React, { useState } from 'react';
import { GoDot } from "react-icons/go";


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='sliderr'>
      <div className='slidermessage'>
       <span>Style Destination</span>
       <h1>Burger Delicious</h1>
       <span>It is a long established fact that a reader will be <br />distracted by the readable content</span>
       <br /><br />
       <button className='slidebutton'>Explore Now</button>
      </div>
      <div className='arrows flex'>
      <GoDot className='left-arrow' onClick={prevSlide} />
      <GoDot className='right-arrow' onClick={nextSlide} />
      </div>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
  
    </section>
  );
};

export default ImageSlider;