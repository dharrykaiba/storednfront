import React, { useState } from 'react'
import { registro } from '../services/authService'

export default function RegisterView () {
  const [usuario, setUsuario] = useState('')
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')

  const registrar = e => {
    e.preventDefault()
    console.log(usuario, correo, password)
    registro(usuario, correo, password)
      .then(rpta => console.log(rpta))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Register</h2>
            <form
              onSubmit={e => {
                registrar(e)
              }}
            >
              <div>
                <label>usuario</label>
                <input
                  type='text'
                  value={usuario}
                  onChange={e => {
                    setUsuario(e.target.value)
                  }}
                />
              </div>
              <div>
                <label>correo</label>
                <input
                  type='email'
                  value={correo}
                  onChange={e => {
                    setCorreo(e.target.value)
                  }}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type='password'
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <button type='submit'>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
