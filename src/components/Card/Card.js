import React from 'react'
import { Link } from 'react-router-dom';

 function Card({id, title, cover,location}) {
    
  return (
    <Link to={`logement/${id}`} className="card-link card-overlay ">
        <img src={cover} alt={title} />
        <div className='card-text'>
        <h3>{title}</h3>
        <h3>{location}</h3>
        </div>
    </Link>
  )
}
export default Card;