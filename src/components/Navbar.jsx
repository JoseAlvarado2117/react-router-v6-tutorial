import React from "react"
import { NavLink } from "react-router-dom"

import './Navbar.css';


const Navbar = () => {
  return (
    <header className="header">
      <h1>BlogApp</h1>
      <nav className="menu">
        <NavLink to="/"
          className={({ isActive }) => isActive ? "active" : undefined}
        >Inicio</NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => isActive ? "active" : undefined}
        >Blog</NavLink>
        <NavLink
          to="/contacto"
          className={({ isActive }) => isActive ? "active" : undefined}
        >Contacto</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
