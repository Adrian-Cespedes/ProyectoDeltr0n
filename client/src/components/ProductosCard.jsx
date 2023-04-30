
export function ProductosCard({Productos}) {
  return (
    <div>
        <h1>{Productos.name}</h1>
        <p>{Productos.description}</p>
        <hr />
    </div>
  )
}
