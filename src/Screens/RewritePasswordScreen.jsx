import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest'
import ENVIROMENT from '../config/enviroment'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import "../styles/RewritePasswordScreen.css"



const RewritePasswordScreen = () => {
    const navigate = useNavigate()
    /* Forma con react router dom */
    const [searchParams] = useSearchParams(window.location.search)
    const reset_token = searchParams.get('reset_token')
    useEffect(
        ()=>{
            
            if(!reset_token) {
                navigate('/login')
            }
        
        },
        []
    )
    

    /* 
	Forma nativa
    useEffect(
        ()=>{
            const searchParams = new URLSearchParams(window.location.search)
            const reset_token = searchParams.get('reset_token')
            if(!reset_token) {
                navigate('/login')
            }
        },
        []
    ) */
    
	const initialFormState ={
		password: ''
	}

	const { formState, handleChangeInput } = useForm(initialFormState)
	const { responseApiState, putRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/rewrite-password')

    useEffect(
        ()=>{
            if(responseApiState.data) {
                navigate('/login')
            }
        }, 
        [responseApiState]
    )

	const handleSubmitForm = async (e) =>{
		e.preventDefault()
        //                 Nueva pass                    Reset_token
		await putRequest({password: formState.password, reset_token})
	}




	return (


        <div  className='login'>

<header className="header-login">	
				<div className="header-left"></div>	
				<div className="logo-container">
					<img 
						src="https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg" 
						alt="Slack"
						className="logo-login" /> 
				</div>
			</header>





            
		<div >
			<h1 className='h1-login'>Establecer nueva contraseña</h1>
			<form onSubmit={handleSubmitForm} className='form'>
				<div className='mail'>
					<label htmlFor='password'>Nueva contraseña</label>
					<input 
						type="password" 
						id='password' 
						name='password' 
						placeholder='NuevaContraseña' 
						value={formState.password} 
						onChange={handleChangeInput} 
					/>
				</div>

				{responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>}
				{
					responseApiState.loading
					? <span>Cargando</span>
					: (
                        responseApiState.data 
                        ? <span>Enviado</span>
                        : <button>Establecer nueva contraseña</button>
                    )
				}
			</form>
		</div>
                </div>
	)
}

export default RewritePasswordScreen