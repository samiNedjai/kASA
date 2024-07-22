import React from 'react'
import { useState } from 'react'
import ArrowRight from '../../assets/chevron_carousel_right.png'
import ArrowLeft from '../../assets/chevron_carousel_left.png'


  function Slider({ images }) {
    // État local pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour naviguer vers l'image précédente
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
 // Fonction pour naviguer vers l'image suivante
 const goToNext = () => {
  const isLastImage = currentIndex === images.length - 1;
  const newIndex = isLastImage ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};
  // Vérifie si vous avez plus d'une image pour afficher les flèches et le compteur
  const showArrows = images.length > 1; 
  const showCounter = images.length > 1; 

  return (
    <div className="slider" >
       {/* Affiche l'image actuelle */}
        <img 
          className="slider" 
          src={images[currentIndex]} 
          alt={`Vue de la chambre ${currentIndex + 1}`}
         />

        {showArrows && (
        <>
        <img 
          className='slider_arrow slider_arrow_left'
          src={ArrowLeft} 
          alt="Précédent" 
          onClick={goToPrevious}
        />
      
        <img
          className='slider_arrow slider_arrow_right' 
          src={ArrowRight} 
          alt="Suivant"
          onClick={goToNext}
        />
      </>
      )}

       {showCounter && 
       <p className='slideCount'>
          {currentIndex + 1} / {images.length}
      </p>
        }
    </div>
  );
}

export default Slider ;