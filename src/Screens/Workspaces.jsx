import React from 'react'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest.jsx'
import ENVIROMENT from '../config/enviroment'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ServerError } from '../utils/error'
import { useState } from 'react'


const CrearWorkspace = () => {
    const formInitialState = {
        name: '',
        description: '',
    }
    const { formState, handleChangeInput } = useForm(formInitialState)

    const { responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/workspaces')


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
                        : (
                    responseApiState.data 
                    ? <span>WORKSPACES CREADO</span>
                    : <button>crear workspaces</button>
                )   
                } 
            </form>
        </div>
    )
}

export default CrearWorkspace
