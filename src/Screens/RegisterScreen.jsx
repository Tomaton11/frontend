import React, { useState } from 'react'
import ENVIROMENT from '../config/enviroment'
import { ServerError } from '../utils/error'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest'
import { useNavigate, useParams } from 'react-router-dom'
import "../styles/RegisterScreen.css"

const RegisterScreen = () => {
    const formInitialState = {
        username: '',
        email: '',
        password: ''
    }
    const { formState, handleChangeInput } = useForm(formInitialState)

    const { responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/register')


    const handleSubmitForm = async (event) => {
        event.preventDefault()
        await postRequest(formState)
    }


    return (
        <div className='register'>
            <header className="header-register">
                <div className="header-left"></div>
                <div className="logo-container">
                    <img
                        src="https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg"
                        alt="Slack"
                        className="logo-register"
                    />
                </div>
            </header>

            <div className='main-register'>
                <h1 className='h1-register'>Regístrate en nuestra app</h1>
                <form onSubmit={handleSubmitForm} className='form-register'>
                    <div>
                        <label htmlFor='username' className='label-register'>Nombre de Usuario</label>
                        <input
                            placeholder='Joe Doe'
                            type='text'
                            id='username'
                            name='username'
                            value={formState.username}
                            onChange={handleChangeInput}
                            className='input-register'
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='label-register'>Email</label>
                        <input
                            placeholder='joedoe@mail.com'
                            type='email'
                            id='email'
                            name='email'
                            value={formState.email}
                            onChange={handleChangeInput}
                            className='input-register'
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='label-register'>Contraseña</label>
                        <input
                            placeholder='Example_password123'
                            type='password'
                            id='password'
                            name='password'
                            value={formState.password}
                            onChange={handleChangeInput}
                            className='input-register'
                        />
                    </div>
                    {responseApiState.error && (
                        <span className="error">{responseApiState.error}</span>
                    )}
                    {responseApiState.loading
                        ? <span className='span-register'>Cargando...</span>
                        : <button type='submit'>Registrar</button>}
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen