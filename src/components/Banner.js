import React from 'react'
import { useLocation } from 'react-router-dom'

function Banner() {
  const home = "./homebanner.jpg";
  const about = "./aboutbanner.jpg";
  const location = useLocation();
  // console.log(location)
return (
  <div className="kasa-banner">
    <img
      src={location.pathname === "/kasa/a-propos" ? about : home}
      alt="banner"
    />
    <div className="overlay"></div>
    {location.pathname === "/kasa/" ? (
      <div className="banner-text">
        <p> Chez vous, partout et ailleurs</p>
      </div>
    ) : null}
  </div>
)
}
export default Banner;