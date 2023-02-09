import React from 'react'
import Tarjeta from './Tarjeta'

export default function Tarjetas ({ productos }) {
  return (
    <div>
      {productos.map((prod, i) => (
        <Tarjeta producto={prod} key={i}></Tarjeta>
      ))}
    </div>
  )
}
