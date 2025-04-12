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





        <main className='main-login'>
		<div >
			<h1 className='h1-login'>Establecer nueva contraseña</h1>
			<form onSubmit={handleSubmitForm} className='form'>
				<div className='div-input'>
					<input 
						type="password" 
						id='password' 
						name='password' 
						placeholder='Contraseña_123*' 
						value={formState.password} 
						onChange={handleChangeInput}
						className='input-login'
					/>
				</div>

				{responseApiState.error && <span style={{color: 'red'}} className='error'>{responseApiState.error}</span>}
				{
					responseApiState.loading
					? <span className='span-login'>Cargando</span>
					: (
                        responseApiState.data 
                        ? <span className='span-login'>Enviado</span>
                        : <button className='btn-login'>Establecer nueva contraseña</button>
                    )
				}
			</form>
			
		</div></main>
                </div>
	)
}

export default RewritePasswordScreen