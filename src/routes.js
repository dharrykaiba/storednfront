import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView'
import DetailView from './views/DetailView'
import CarritoView from './views/CarritoView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'

export default function Rutas () {
  return (
    <Routes>
      <Route index path='/' element={<HomeView />} />
      <Route path="/:id" element={<DetailView/>} />
      <Route path="/carrito/" element={<CarritoView/>} />
      <Route path="/login/" element={<LoginView/>} />
      <Route path="/register/" element={<RegisterView/>} />
    </Routes>
  )
}
