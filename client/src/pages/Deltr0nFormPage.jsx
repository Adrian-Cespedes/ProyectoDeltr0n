import {useForm} from 'react-hook-form'
import {createProduct} from '../api/Deltr0n.api'
import {useNavigate} from 'react-router-dom'

export function Deltr0nFormPage() {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async data => {
        await createProduct(data);
        navigate("/inicio");
    });

    return (
        <div>

            <form onSubmit={onSubmit}>
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

                <button>Guardar</button>
            </form>

        </div>
    )
}