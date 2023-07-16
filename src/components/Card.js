import React from 'react'
import { Link } from 'react-router-dom';

 function Card({id, title, cover}) {
    
  return (
    <Link to={`logement/${id}`} className="card-link card-overlay ">
        <img src={cover} alt={title} />
        <h3>{title}</h3>
    </Link>
  )
}
export default Card;