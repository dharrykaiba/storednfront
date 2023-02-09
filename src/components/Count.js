import React from 'react'

export default function Count ({ cantidadProductos, actualizarCantidad }) {
  const disminuirCantidad = () => {
    if (cantidadProductos === 1) {
      return
    }
    actualizarCantidad(cantidadProductos - 1)
  }
  return (
    <div>
      <span>Cantidad:</span>
      <button
        onClick={() => {
          disminuirCantidad()
        }}
      >
        <i></i>
      </button>
      <span>{cantidadProductos}</span>
      <button
        onClick={() => {
          actualizarCantidad(cantidadProductos + 1)
        }}
      >
        <i></i>
      </button>
    </div>
  )
}
