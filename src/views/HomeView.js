import React, { useEffect, useState } from 'react'
import Tarjetas from "../components/Tarjetas";
import { obtenerProductos } from '../services/productosServices'

export default function HomeView () {
  const [productos, setProductos] = useState([])

  const getProducts = async () => {
    let data = await obtenerProductos()
    //console.log(data)
    setProductos(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return <div><Tarjetas productos={productos}></Tarjetas></div>
}
