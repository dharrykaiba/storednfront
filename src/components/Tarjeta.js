import React from 'react'
import {Link} from 'react-router-dom';

export default function Tarjeta ({producto}) {
  //console.log("tarjeta", producto)
  return (
    <div>
      <div>
        <img src={producto.productoImagen} className="card" width="200" height="200" alt={producto.productoNombre}/>
        <div>
            <h3>{producto.productoNombre}</h3>
            <p>{producto.productoPrecio}</p>
            <Link to={`/${producto.productoId}`}>Detalle</Link>
        </div>
      </div>
    </div>
  )
}
