import React from 'react'
import Rutas from './routes'
import { BrowserRouter } from 'react-router-dom'
import CarritoContextProvider from './context/carritoContext'
import Navigation from './components/Navigation'

export default function App () {
  return (
    <BrowserRouter>
      <CarritoContextProvider>
        <Navigation />
        <Rutas></Rutas>
      </CarritoContextProvider>
    </BrowserRouter>
  )
}
