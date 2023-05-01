import imgtest from '../images/noimage.png'

export function ProductosCard({Productos}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={imgtest}/></figure>
    <div className="card-body">
        <h2 className="card-title">{Productos.name}</h2>
        <p>$ {Productos.price}</p>
        <div className="card-actions justify-end">
            <p>Stock: {Productos.stock} unidades</p>
        </div>
    </div>
    </div>
  )
}
