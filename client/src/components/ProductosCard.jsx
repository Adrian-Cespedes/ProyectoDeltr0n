import imgtest from '../images/noimage.png'

export function ProductosCard({Productos}) {
  const image = `src/images/${Productos.image}`
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={image}/></figure>
    <div className="card-body">
        <h2 className="card-title">{Productos.name}</h2>
        <p className='text-primary font-bold'>${Productos.price}</p>
        <div className="card-actions justify-end">
            <p className='font-bold'>Stock: <p className='text-accent inline-block'>{Productos.stock} unidades</p></p>
            
        </div>
    </div>
    </div>
  )
}
