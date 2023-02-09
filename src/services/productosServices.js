import axios from 'axios'

const URL = 'https://616682d613aa1d00170a651e.mockapi.io/producto'

const obtenerProductos = async () => {
  try {
    let { data } = await axios.get(URL)
    return data
  } catch (error) {
    return { error }
  }
}

const obtenerProductosById = async (prodId) => {
  try {
      let {data}=await axios.get(`${URL}/${prodId}`)
  
      return data;
  } catch (error) {
      return(error);
  }
}

export { obtenerProductos, obtenerProductosById }
