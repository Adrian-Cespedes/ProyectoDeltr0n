
export function Catalog() {
  return (
    <div>

        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/*<!-- Page content here -->*/}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <div className="grid grid-cols-3 gap-4">
                    <div className="artboard phone-1 bg-neutral">320×568</div>
                    <div className="artboard phone-1 bg-neutral">320×568</div>
                    <div className="artboard phone-1 bg-neutral">320×568</div>
                    <div className="artboard phone-1 bg-neutral">320×568</div>
                    <div className="artboard phone-1 bg-neutral">320×568</div>
                    <div className="artboard phone-1 bg-neutral">320×568</div>
                    <div className="artboard phone-1 bg-neutral">320×568</div>
                    <div className="artboard phone-1 bg-neutral">320×568</div>
                    <div className="artboard phone-1 bg-neutral">320×568</div>
                    <div className="artboard phone-1 bg-neutral">320×568</div>
                    <div className="artboard phone-1 bg-neutral">320×568</div>
                </div>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-neutral text-base-content">
                <li className="text-xl font-bold">Categorias</li>
                <li><a>Procesador</a></li>
                <li><a>Placa Madre</a></li>
                <li><a>Memoria</a></li>
                <li><a>Almacenamiento</a></li>
                <li><a>Tarjeta de video</a></li>
                <li><a>Cooler</a></li>
                <li><a>Fuente de poder</a></li>
                <li><a>Case</a></li>

                <div className="divider"></div> 
                
                <li className="text-xl font-bold mb-2">Ordenar</li>
                <select className="select select-bordered w-full max-w-xs">
                    {/*<option disabled selected>Who shot first?</option>*/}
                    <option>Alfabéticamente (A-Z)</option>
                    <option>Alfabéticamente (Z-A)</option>
                    <option>Precio (Menor a Mayor)</option>
                    <option>Precio (Mayor a Menor)</option>
                </select>

                <div className="divider"></div>

                <li className="text-xl font-bold mb-2">Filtrar</li>
                <li className="font-bold">Disponibilidad</li>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" checked className="checkbox" />
                        <span className="label-text">En stock</span> 
                    </label>
                </div>

                
                </ul>
            
            </div>
        </div>        

        <div className='busqueda'>
            <h3 className='labelBuscar'> Buscar producto:  </h3>
            <input className='buscador' type='text' placeholder='Buscar...'/>
        </div>

        <hr/>

        <div className='catalogo'>
            <ul className='tipos'>
                <li> Tipo1 </li>
                <li> Tipo2 </li>
                <li> Tipo3 </li>
            </ul>

            <hr className='linea'/>

            <div>
                <table className='productos'>
                    <tr>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                    </tr>
                    <tr>
                        <td>Producto1</td>
                        <td>Descripcion1</td>
                        <td>Precio1</td>
                    </tr>
                </table>
            </div>


        </div>

    </div>
  )
}
