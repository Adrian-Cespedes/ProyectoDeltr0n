import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div>
        <Link to="/inicio"> 
            <h1>Deltr0n App</h1>
        </Link>
        <Link to="/busqueda">Busqueda</Link>
    </div>
  )
}
