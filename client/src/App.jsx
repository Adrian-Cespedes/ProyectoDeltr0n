import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Deltr0nPage} from './pages/Deltr0nPage'
import {Deltr0nFormPage} from './pages/Deltr0nFormPage'
import {Navigation} from './components/Navigation'
import {MainPage} from './components/MainPage'
import {Catalog} from './components/Catalog'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <html data-theme="dark"></html>
    <div id='content'>
    <Navigation/>
    <Routes>
        <Route path='/' element={<Navigate to="/inicio"/>} />
    </Routes>

    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-auto">
        <a className="btn btn-ghost normal-case text-xl">Deltr0n</a>
      </div>
      <div className='flex-auto'>
        <input type="text" placeholder="Buscar producto..." className="input input-bordered w-full max-w-xl" />
      </div>
      <div className="flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href='/catalogo'>Catálogo</a></li>
          <li><a>Ofertas</a></li>
          <li><a>Perfil</a></li>
          <li><a>Carrito</a></li>
        </ul>
      </div>
    </div>

    <Routes>
      <Route path='/inicio' element={<MainPage/>} />
      <Route path='/catalogo' element={<Catalog/>} />
      <Route path='/busqueda' element={<Deltr0nFormPage/>} />
    </Routes>

    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">Contacto</a> 
        <a className="link link-hover">Teléfono: 123456789</a> 
        <a className="link link-hover">Correo: ventas@deltron.com.pe</a> 
        <a className="link link-hover">Direccion: Av. Aviacion 1234</a>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by ProyectoDeltr0n</p>
      </div>
    </footer>
    </div>
    </BrowserRouter>

  )
}

export default App