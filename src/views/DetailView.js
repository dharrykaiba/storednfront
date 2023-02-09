import React, { useState, useEffect, useContext } from 'react'
import { obtenerProductosById } from '../services/productosServices'
import { CarritoContext } from '../context/carritoContext'
import { useParams } from 'react-router-dom'
import Count from '../components/Count'

export default function DetailView () {
  let { id } = useParams()
  //console.log('Detalle Props', id)
  const { carrito, anadirProducto } = useContext(CarritoContext)
  console.log("carritoDelContext", carrito);

  const [miProducto, setMiProducto] = useState({})
  const [cantidad, setCantidad] = useState(1)

  const getProduct = async () => {
    let productoObtenido = await obtenerProductosById(id)
    setMiProducto(productoObtenido)
    //console.log('prodObtenido', productoObtenido)
  }

  const anadirAlCarrito = () => {
    let productoAAnadir = {
      producto_id: miProducto.productoId,
      producto_nombre: miProducto.productoNombre,
      producto_precio: miProducto.productoPrecio,
      producto_cantidad: cantidad
    }
    anadirProducto(productoAAnadir)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      <div>
        <div>
          <img src={miProducto.productoImagen} alt='' width="200" height="200"/>
        </div>
        <div>
          <h1>{miProducto.productoNombre}</h1>
          <h2>Precio: {miProducto.productoPrecio}</h2>
          <h4>Descripcion:</h4>
          <p>{miProducto.productoDescripcion}</p>
          <Count
            cantidadProductos={cantidad}
            actualizarCantidad={setCantidad}
          ></Count>
          <button
            onClick={() => {
              anadirAlCarrito()
            }}
          >
            Agregar Carrito
          </button>
        </div>
      </div>
    </div>
  )
}
