import {useForm} from 'react-hook-form'
import {createProduct} from '../api/Deltr0n.api'
import { deleteProduct } from '../api/Deltr0n.api'
import {useNavigate} from 'react-router-dom'
import {BasicDeltr0nList} from '../components/Deltr0nList'

function formCreate(){
    const{register, handleSubmit, formState:{errors}} = useForm();
    return(
    < form id = 'create' onSubmit={handleSubmit(async data =>{
        
        console.log(data.image)
        data.image = data.image[0].name
        console.log(data.image)
        const res = await createProduct(data)
        } //falta resetear forms despues  de submit
        )} className='flex flex-col m-4'>
            <input type="text" placeholder="ID" 
                                className="input input-bordered w-full max-w-xs mb-2" 
                                maxLength={10}
                                {...register("id", {required:true})}/>

            {errors.id && <span>ID requerido</span>}

            <input 
                type="text" 
                placeholder="Nombre" 
                className='input input-bordered w-full max-w-xs mb-2'
                {...register("name", {required:true})}
            />

            {errors.name && <span>Nombre requerido</span>}

            <input 
                type="text" 
                placeholder="Marca" 
                className='input input-bordered w-full max-w-xs mb-2'
                {...register("brand", {required:true})}
            />

            {errors.name && <span>Marca requerida</span>}

            <textarea 
                rows="3"
                placeholder="Descripcion"
                className="textarea textarea-bordered mb-2"
                {...register("description", {required:true})}
            ></textarea>

            {errors.description && <span>Descripcion requerida</span>}

            <input 
                type="number" 
                placeholder="Stock inicial" 
                className='input input-bordered w-full max-w-xs mb-2'
                {...register("stock", {required:true})}
            />

            {errors.name && <span>Stock inicial requerido</span>}

            < input type="number" placeholder='Precio'
            className='input input-bordered w-full max-w-xs mb-2' {...register("price",{required:true})}/>
            {errors.price && <span>Precio Requerido</span>}

            <p className='text-bold mt-2'>Subir imagen</p>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs mb-2"
            {...register("image", {required:true})} />
            {errors.image && <span>Imagen Requerido</span>}

            <button className='btn btn-primary max-w-xs mx-auto'>Guardar</button>
        </form> 
    );
}


export function Deltr0nFormPage() {

    const{register, handleSubmit, formState:{errors}} = useForm();

    return (
        <div>
            <BasicDeltr0nList/>
            <hr/>

            <div className='grid grid-cols-2 gap-4'>
                <div>
                <h1 className='text-3xl font-bold ml-4 mt-4'>Crear Producto:</h1>
                {formCreate()}
                </div>
                <div>
                    <h1 className='text-3xl font-bold ml-4 mt-4'>Eliminar Producto:</h1> 
                    <form id= 'delete' className='flex flex-col m-4' 
                    onSubmit={handleSubmit(async data =>{
                    const res = await deleteProduct(data)
                    })}>
                        
                        <input type="text" placeholder="ID..." 
                                className="input input-bordered w-full max-w-xs" 
                                maxLength={10}
                                {...register("id", {required:true})}/>
                        {errors.id && <span>ID requerido</span>}

                        <button className='btn btn-primary max-w-xs mx-auto mt-4'>Eliminar</button>
                    </form>
                </div>
            </div>
        
           


        </div>
    )
}