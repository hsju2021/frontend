import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const ImageSlider = ( {slides} ) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;
  

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='arrow-left' />
      <FaArrowAltCircleRight className='arrow-right' />
      {SliderData.map((slide, index) => { 
        return (
          <img src={slide.image} alt='wha' />
        )
      })}
    </section>
  )
}

export default ImageSlider;