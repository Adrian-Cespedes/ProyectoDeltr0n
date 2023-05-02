import {useForm} from 'react-hook-form'
import {createProduct} from '../api/Deltr0n.api'
import { deleteProduct } from '../api/Deltr0n.api'
import {useNavigate} from 'react-router-dom'
import {BasicDeltr0nList} from '../components/Deltr0nList'

function formCreate(){
    const{register, handleSubmit, formState:{errors}} = useForm();
    return(
    < form id = 'create' onSubmit={handleSubmit(async data =>{
        const res = await createProduct(data)
        console.log(res)
        } //falta resetear forms despues  de submit
        )} style={{display:'flex', flexDirection:'column', gap:'1em'}}>
            <input 
                type="text" 
                placeholder="ID" 
                maxLength={10}
                {...register("id", {required:true})}
            />

            {errors.id && <span>ID requerido</span>}

            <input 
                type="text" 
                placeholder="Nombre" 
                {...register("name", {required:true})}
            />

            {errors.name && <span>Nombre requerido</span>}


            <textarea 
                rows="3"
                placeholder="Descripcion" 
                {...register("description", {required:true})}
            ></textarea>

            {errors.description && <span>Descripcion requerida</span>}

            < input type="text" placeholder='Precio'{...register("price",{required:true})}/>
            {errors.price && <span>Precio Requerido</span>}

            

            <button>Guardar</button>
        </form> 
    );
}


export function Deltr0nFormPage() {

    const{register, handleSubmit, formState:{errors}} = useForm();

    return (
        <div>
            <BasicDeltr0nList/>
            <hr/>
            <h1 style={{fontWeight:'bold', fontSize:'2.3em'}}>Crear Producto:</h1>

            <div>
                {formCreate()}
            </div>
            

               <hr></hr> 
           <h1 style={{fontWeight:'bold', fontSize:'2.3em'}}>Eliminar Producto:</h1> 
              <form id= 'delete' onSubmit={handleSubmit(async data =>{
            const res = await deleteProduct(data)
              })} style={{display:'flex', flexDirection:'column', gap:'1em'}}>
                <input

                    type="text"
                    placeholder="ID"
                    maxLength={10}
                    {...register("id", {required:true})}
                />
                {errors.id && <span>ID requerido</span>}


                <button>Eliminar</button>
            </form>


        </div>
    )
}