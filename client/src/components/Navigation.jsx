import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div>
        <Link to="/inicio"> 
            <h1 className="mb-6 text-5xl font-bold">Deltr0n App</h1>
        </Link>
        <Link to="/busqueda">Busqueda</Link>
    </div>
  )
}
