import React from 'react'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest.jsx'
import ENVIROMENT from '../config/enviroment'
import { Link } from 'react-router-dom'



const LoginScreen = () => {

    const initialFormState = {
        email: '',
        password: ''
    }
    const { formState, handleChangeInput } = useForm(initialFormState)

    const { responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/login')

    const handleSubmitForm = async(event) => {
        event.preventDefault()
        await postRequest(formState)
    }

    return (
        <div>
            <h1>inicio de sesion</h1>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label htmlFor='email'>Usuario</label>

                    <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    placeholder='joedoe@mail.com' 
                    value={formState.email} 
                    onChange={handleChangeInput} />

                </div>

                <div>
                    <label htmlFor='password'>Contraseña</label>

                    <input 
                    type='text' 
                    id='password' 
                    name='password' 
                    placeholder='Example_password123' 
                    value={formState.password} 
                    onChange={handleChangeInput} />
                </div>

                {
                    responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>
                }
                {
                    responseApiState.loading
                        ? <span>Cargando</span>
                        : <button type='submit' >Iniciar sesion</button>
                }
                <Link to= {"/reset-password"}>Olvidé mi contraseña</Link>
            </form>
            </div>
    )
}

export default LoginScreen