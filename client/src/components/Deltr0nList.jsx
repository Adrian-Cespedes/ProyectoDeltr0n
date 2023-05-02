import {useEffect, useState} from 'react'
import {getAllProducts} from '../api/Deltr0n.api'
import {createProduct} from '../api/Deltr0n.api'
import {ProductosCard} from './ProductosCard'

export function Deltr0nList() {

    const [Productos, setProductos] = useState([]);

useEffect(() => {
    async function loadProducts() {
        const res = await getAllProducts();
        setProductos(res.data);
    }
    loadProducts();
}, [])

  return (
    <div className='grid grid-cols-3 gap-4'>
        {Productos.map(Productos => (
            <ProductosCard key={Productos.id} Productos={Productos}/>
        ))}
    </div>
  )
}

export function BasicDeltr0nList() {

const [Productos, setProductos] = useState([]);

useEffect(() => {
    async function loadProducts() {
        const res = await getAllProducts();
        setProductos(res.data);
    }
    loadProducts();
}, []);

 return <div>
    <h1 style={{fontWeight:'bold', fontSize:'2.3em'}}>Obtener Productos:</h1>
    { Productos.map(Productos => (
        <div key={Productos.id}>
        {Productos.id} - {Productos.name} - {Productos.description} - {Productos.price}
        </div>)
       ) } 
 </div>
}


