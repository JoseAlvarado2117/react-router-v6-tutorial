import React from "react"
import {Link} from "react-router-dom"

import './NotFound404.css';



const NotFound404 = () => {
  return (
    <div className="container-404">
      <h1>404</h1>
      <Link to="/" className="a-404">Inicio</Link>
    </div>
  )
}

export default NotFound404
