import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div>
        <Link to="/inicio" className='items-center'>
            <div className="avatar">
              <div className="w-24 rounded-full m-2">
                <img src="src/images/logo.png" />
              </div>
                <h1 className="my-auto text-5xl font-bold ">Deltr0n App</h1>
            </div> 
            
        </Link>
        <Link to="/busqueda">Busqueda</Link>
    </div>
  )
}
