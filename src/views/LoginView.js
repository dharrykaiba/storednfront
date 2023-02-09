import React from 'react'

export default function LoginView () {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Login</h2>
            <form>
              <div>
                <label>correo</label>
                <input type='email' />
              </div>
              <div>
                <label>Password</label>
                <input type='password' />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
