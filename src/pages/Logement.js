import React from 'react'
import datas from '../data/data.json'
import { useParams } from 'react-router-dom'
import Slider from '../components/Slidershow'
import Error from './Error'
import Collapse from '../components/Collapse'
import red_star from '../assets/red_star.png'
import grey_star from '../assets/grey_star.png'


 function Logement() {
  const { id } = useParams();
  console.log(id)
  const selectedData = datas.find((data) => data.id === id) ;
  if (!selectedData) {
    return <div><Error/></div>;
  }
  const pictures = selectedData.pictures;
  const title = selectedData.title;
  const location = selectedData.location;
  const description = selectedData.description;
  const host = selectedData.host;
  const rating = selectedData.rating;
  const equipments = selectedData.equipments;
  const tags = selectedData.tags;
 
// Génère les étoiles en fonction de la note
const maxRating = 5;
const stars = Array.from({ length: maxRating }, (_, index) => {
  return index < rating ? red_star : grey_star;
});
  return (
    <main>
    <div className="logement_container">
      <Slider images={pictures} />
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
      <div className="logement_tags_stars">
        <ul className="tags">
          {tags.map((tag, index) => (
            <li className="logement_tag" key={index}>
              {tag}
            </li>
          ))}
        </ul>
        <div className="acc_stars_host">
          <div className="logement_stars">
          {stars.map((star, index) => (
                <img src={star} alt={`Étoile ${index + 1}`} key={index} className="star" />
              ))}
            
          </div>
          {/* <div className="logement_host_mobile">
            <p>{host.name}</p>
            <img
              src={host.picture}
              alt={"photo de profil de " + host.name}
            />
          </div> */}
        </div>
      </div>
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