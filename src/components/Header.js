import React from 'react'
import Navbar from './Navbar'
import logo from "../assets/logo.svg"

export default function Header() {
  return (
    <header className="kasa-header">
      <img src={logo} alt="Logo Kasa" />
      <Navbar />
    </header>
  )
}
