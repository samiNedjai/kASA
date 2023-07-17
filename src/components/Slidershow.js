import React from 'react'
import { useState } from 'react'
import ArrowRight from '../assets/chevron_carousel_right.png'
import ArrowLeft from '../assets/chevron_carousel_left.png'


  function Slider({ images }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const showArrows = images.length > 1; // Vérifie si vous avez plus d'une image
  const showCounter = images.length > 1; // Vérifie si vous avez plus d'une image

  return (
    <div className="slider" >
        <img className="slider" src={images[currentIndex]} alt={`Vue de la chambre ${currentIndex + 1}`} />
        {showArrows && (
        <>
      <img 
        className='slider_arrow slider_arrow_left'
        src={ArrowLeft} 
        alt="show previous slider" 
        onClick={goToPrevious}
        />
      
      <img
      className='slider_arrow slider_arrow_right' 
      src={ArrowRight} 
      alt="show next slider" 
       onClick={goToNext}
       />
        </>
      )}
       {showCounter && <p className='slideCount'>{currentIndex + 1} / {images.length}</p>}
    </div>
  );
}

export default Slider ;