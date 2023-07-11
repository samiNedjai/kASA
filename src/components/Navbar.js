import React from 'react'
import { NavLink } from 'react-router-dom'

 function Navbar() {
  return (
    <nav className='kasa-nav'>
        <ul>
            <li>
            <NavLink
            to={"/kasa/"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            Accueil
          </NavLink>
            </li>
            <li>
          <NavLink
            to={"/kasa/a-propos"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            A propos
          </NavLink>
        </li>
        </ul>
      
    </nav>
  )
}
export default Navbar;