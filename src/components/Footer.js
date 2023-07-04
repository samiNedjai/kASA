import React from 'react'
import logoFooter from "../assets/logowhite.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer-img" src={logoFooter} alt="logo Kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
