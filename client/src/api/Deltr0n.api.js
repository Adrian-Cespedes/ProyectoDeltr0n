import axios from 'axios'

const Deltr0nAPI = axios.create({
    baseURL: 'http://localhost:8000/system/api/v1/productos/'
})

export const getAllProducts = () => {
    return Deltr0nAPI.get('/')
}

export const createProduct = (Product) => {
    return Deltr0nAPI.post('/', Product)
}