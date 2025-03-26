import React from "react";  
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useApiRequest } from "../hooks/useApiRequest";
import ENVIROMENT from "../config/enviroment";  



const CrearWorkspace = () => {
    const formInitialState = {
        name: '',
        description: '',
    }
    const { formState, handleChangeInput } = useForm(formInitialState)

    const { responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/workspace')


    const handleSubmitForm = async (event) => {
        event.preventDefault()
        await postRequest(formState)
    }


    return (
        <div>
            <h1>crear workspace</h1>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label htmlFor='name'>Nombre del workspace</label>
                    <input
                        placeholder=''
                        type='text'
                        id='name'
                        name='name'
                        value={formState.name}
                        onChange={handleChangeInput}
                        required
                    />
                </div>
                <div>
                </div>
                {
                    responseApiState.error && <span style={{ color: 'red' }}>{responseApiState.error}</span>
                }
                {
                    responseApiState.loading
                        ? <span>Cargando</span>
                        : <button type='submit' >crear</button>
                }
            </form>
        </div>
    )
}

export default CrearWorkspace
