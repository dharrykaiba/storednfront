import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation () {
  return (
    <div>
      <Link to='/'>Inicio</Link>
      <Link to='/carrito'>Carrito</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}
