import React from 'react'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest'
import ENVIROMENT from '../config/enviroment'
import { Link } from 'react-router-dom'
import "../styles/ResetPasswordScreen.css"




const ResetPasswordScreen = () => {
	
	const initialFormState ={
		email: ''
	}

	const { formState, handleChangeInput } = useForm(initialFormState)
	const { responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/reset-password')

	const handleSubmitForm = async (e) =>{
		e.preventDefault()
		await postRequest(formState)
	}
	return (
		<div className='login'>

			<header className="header-login">	
				<div className="header-left"></div>	
				<div className="logo-container">
					<img 
						src="https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg" 
						alt="Slack"
						className="logo-login" /> 
				</div>
			</header>








			<div className='main-login'>
			<h1 className='h1-login'>Recupera tu contraseña</h1>
			<form onSubmit={handleSubmitForm} className='form'>
				<div className>
					<label htmlFor='email' className='label-login'>Email con el que te registraste</label>
					<input 
						type="email" 
						id='email' 
						name='email' 
						placeholder='email' 
						value={formState.email} 
						onChange={handleChangeInput} 
						className='input-login'
					/>
				</div>

				{responseApiState.error && <span style={{color: 'red'}} className='span.login'>{responseApiState.error}</span>}
				{
					responseApiState.loading
					? <span className='span-login'>Cargando</span>
					: (
                        responseApiState.data 
                        ? <span className='span-login'>Se te envio un mail con los pasos a seguir</span>
                        : <button>Restablecer contraseña</button>
                    )
				}

<div className="signup-container">
					<div className="signup-text">		
				<Link to={'/login'} className='create-account-link'>
                    Ya tengo cuenta
                </Link>
			</div>
			</div>
			<div className="signup-container">
					<div className="signup-text">
                <Link to={'/register'} className='create-account-link'>
                    Aun no tengo cuenta
                </Link>
				</div>
			</div>
			</form>
		</div>
		</div>
	)
}

export default ResetPasswordScreen