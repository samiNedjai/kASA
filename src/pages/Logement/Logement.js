import React from 'react'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'
import Slider from '../../components/Slidershow/Slidershow'
import Error from '../Error/Error'
import Collapse from '../../components/Collapse/Collapse'
import red_star from '../../assets/red_star.png'
import grey_star from '../../assets/grey_star.png'


 function Logement() {
  
  // Utilisation du hook useParams pour récupérer l'identifiant du logement depuis l'URL
  const { id } = useParams();
  // Recherche du logement correspondant dans les données chargées depuis "data.json"
  const selectedData = data.logements.find((logement) => logement.id === id) ;

 document.title = `${selectedData.title} - Kasa`

  if (!selectedData) {
    return <div><Error/></div>;
  }

   // Extraction des informations du logement depuis l'objet "selectedData"

  const { pictures, title, location, description, host, rating, equipments, tags } = selectedData;
// Génère les étoiles en fonction de la note

function renderStars(rating, maxRating = 5) {
  return Array.from({ length: maxRating }, (_, index) => (
    <img 
      key={index}
      src={index < rating ? red_star : grey_star}
      alt={`Étoile ${index < rating ? 'pleine' : 'vide'}`}
      className="star"
    />
  ));
}
  return (
    <main>
    <div className="logement_container">
      <Slider className="slider" images={pictures} />
      <div className="logement">
        <div className="logement_header">
          <h1 className="logement_title">{title}</h1>
          <h2 className="logement_location">{location}</h2>
        </div>

        <div className="logement_host">
          <p>{host.name}</p>
          <img src={host.picture} alt={"photo de profil de " + host.name} />
        </div>
      </div>
       {/* Affiche les tags et les étoiles de notation */}
      <div className="logement_tags_stars">
        <ul className="tags">
          {tags.map((tag, index) => (
            <li className="logement_tag" key={index}>
              {tag}
            </li>
          ))}
        </ul>
        <div className="log_stars_host">
          <div className="logement_stars">

          {renderStars(rating)}
            
          </div>
          <div className="logement_host_mobile">
            <p>{host.name}</p>
            <img
              src={host.picture}
              alt={"photo de profil de " + host.name}
            />
          </div>
          </div>
      </div>
      {/* Affiche les sections "Collapse" pour la description et les équipements */}
      <div className="logement_accordion_container">
        <Collapse
          title="Description"
          content={description}
          className="logement_accordion"
        />
        <Collapse
         className="logement_accordion"
          title="Équipements"
          content={
            <ul className="logement_equipement">
              {equipments.map((equipment, index) => (
                <li key={index} className="equipement">
                  {equipment}
                </li>
              ))}
            </ul>
          }
         
        />
      </div>
    </div>
  </main>
);
}
export default Logement;