import React from 'react'
import datas from '../data/data.json'
import { useParams } from 'react-router-dom'
import Slider from '../components/Slidershow'
import Error from './Error'

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
  return (
    <main>
      <div className='logement_container'>
        <Slider images={pictures} />
        <div className='logement'>
          <div className="logement_header">
              <h1 className="logement_title">{title}</h1>
              <h2 className="logement_location">{location}</h2>

          </div>

        </div>
      </div>
    </main>
  )
}
export default Logement;