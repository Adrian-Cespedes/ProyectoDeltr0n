import axios from 'axios'

const Deltr0nAPI = axios.create({
    baseURL: 'http://localhost:8000/system/api/search/productos'
})

export const getAllProducts = () => Deltr0nAPI.get('/')


export const createProduct = (Product) => Deltr0nAPI.post('/', Product)

export const deleteProduct = (Product) => Deltr0nAPI.delete(`/${Product.id}`)
