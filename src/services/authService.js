import axios from 'axios'
//const URL = 'http://localhost:3001/user/register'
const URL = 'https://storednback.herokuapp.com/user/register'



const registro = (usuario, email, password) => {
  return new Promise((resolve, reject) => {
    const data = {
      usuName: usuario,
      usuEmail: email,
      password: password
    }
    console.log(data)

    axios
      .post(URL, data)
      .then(res => {
        resolve(res.user)
        console.log(res.user)
      })
      .catch(err => {
        reject(`Error al loguear usuario ${err}`)
      })
  })
}

/*const ingresar = (email, password) => {
  return new Promise((resolve, reject) => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        resolve(u.user)
      })
      .catch(error => {
        reject(`Error al loguear usuario ${error}`)
      })
  })
}

const salir = () => {
  return new Promise((resolve, reject) => {
    fire
      .auth()
      .signOut()
      .then(() => {
        resolve('El usuario se deslogueo')
      })
      .catch(error => {
        reject(error)
      })
  })
}*/

export { registro }
