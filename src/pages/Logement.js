import React from 'react'
import datas from '../data/data.json'
import { useParams } from 'react-router-dom'
import Slider from '../components/Slidershow'
// import Error from './Error'

 function Logement() {
  const { id } = useParams();
  const selectedData = datas.find((data) => data.id === id) ;
  // if (!selectedData) {
  //   return <div><Error/></div>;
  // }
  const pictures = selectedData.pictures;
  return (
    <div>
      <div className='logement_container'>
        <Slider images={pictures} />
      </div>
    </div>
  )
}
export default Logement;