import {useEffect, useState} from 'react'
import {getAllProducts} from '../api/Deltr0n.api'
import {createProduct} from '../api/Deltr0n.api'
import {ProductosCard} from './ProductosCard'

export function TempCarouselItems() {

  const [Productos, setProductos] = useState([]);

useEffect(() => {
  async function loadProducts() {
      const res = await getAllProducts();
      setProductos(res.data);
  }
  loadProducts();
}, [])

return (
  <div className='carousel-item'>
      {Productos.map(Productos => (
          <ProductosCard key={Productos.id} Productos={Productos}/>
      ))}
  </div>
)
}

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

 return (<div>
    <h1 style={{fontWeight:'bold', fontSize:'2.3em'}}>Obtener Productos:</h1>
    
 <div className="overflow-x-auto">
 <table className="table table-compact w-full">
   <thead>
     <tr>
       <th>ID</th> 
       <th>Name</th> 
       <th>Brand</th> 
       <th>Price</th> 
       <th>Stock</th> 
       <th>Creation Date</th> 
       <th>Image</th>
     </tr>
   </thead> 
   <tbody>
        {Productos.map(Productos => (
            <tr>
                <th>{Productos.id}</th>
                <td>{Productos.name}</td>
                <td>{Productos.brand}</td>
                <td>{Productos.price}</td>
                <td>{Productos.stock}</td>
                <td>{Productos.creationDate}</td>
                <td>{Productos.image}</td>
            </tr>
        ))}
   </tbody>
 </table>
</div>
</div>

    )
}



