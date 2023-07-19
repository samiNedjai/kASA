import React from 'react'
import { useLocation } from 'react-router-dom'
import homeBanner from '../assets/homebanner.jpg';
import aboutBanner from '../assets/aboutbanner.jpg';


function Banner() {
  const location = useLocation();
   console.log(location)
   
return (
  <div className="kasa-banner">
    <img
      src={location.pathname === "/a-propos" ? aboutBanner : homeBanner}
      alt="banner"
    />
    <div className="overlay"></div>
    {location.pathname === "/" ? (
      <div className="banner-text">
        <p> Chez vous, partout et ailleurs</p>
      </div>
    ) : null}
  </div>
)
}
export default Banner;