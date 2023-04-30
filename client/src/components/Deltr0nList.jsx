import {useEffect, useState} from 'react'
import {getAllProducts} from '../api/Deltr0n.api'
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
    <div>
        {Productos.map(Productos => (
            <ProductosCard key={Productos.id} Productos={Productos}/>
        ))}
    </div>
  )
}
