import { Deltr0nFormPage } from '../pages/Deltr0nFormPage'
import {Deltr0nList} from './Deltr0nList'

export function Catalog() {
  return (
    <div>
        <div className='grid grid-cols-5 gap-4 m-4'>
            <div>
            <ul className="menu bg-neutral max-w p-2 rounded-box">
            <li className="text-xl font-bold">
                <span>Categorias</span>
            </li>
                <li><a>Procesador</a></li>
                <li><a>Placa Madre</a></li>
                <li><a>Memoria</a></li>
                <li><a>Almacenamiento</a></li>
                <li><a>Tarjeta de video</a></li>
                <li><a>Cooler</a></li>
                <li><a>Fuente de poder</a></li>
                <li><a>Case</a></li>
                
            <div className="divider"></div> 
            <li className="text-xl font-bold">
                <span>Ordenar</span>
            </li>         
                
                {/*<li className="text-xl font-bold mb-2">Ordenar</li>*/}
                <select className="select select-bordered w-10/12 max-w-xs ml-4">
                    {/*<option disabled selected>Who shot first?</option>*/}
                    <option>Alfabéticamente (A-Z)</option>
                    <option>Alfabéticamente (Z-A)</option>
                    <option>Precio (Menor a Mayor)</option>
                    <option>Precio (Mayor a Menor)</option>
                </select>

            <div className="divider"></div> 
            <li className="text-xl font-bold">
                <span>Filtrar</span>
            </li>
            <li className="font-bold ml-4">Disponibilidad</li>
                <div className="form-control ml-4">
                    <label className="label cursor-pointer">
                        <input type="checkbox" checked className="checkbox" />
                        <span className="label-text justify-start">En stock</span> 
                    </label>
            </div>
            </ul>
            </div>

            {/* Listado de productos */}
            <div className='col-span-4'>
                <Deltr0nList/>
            </div>
        </div>


    </div>
  )
}
