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
		<div className='ressetpassword'>
      <header className="header-ressetpassword">
        <div className="header-left"></div>
        <div className="logo-container">
          <img
            src="https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg"
            alt="Slack"
            className="logo-ressetpassword"
          />
        </div>
      </header>

      <div className='main-ressetpassword'>
        <h1 className='h1-ressetpassword'>Recupera tu contraseña</h1>
        <form onSubmit={handleSubmitForm} className='form-ressetpassword'>
          <div>
            <label htmlFor='email' className='label-ressetpassword'>Email con el que te registraste</label>
            <input
              type="email"
              id='email'
              name='email'
              placeholder='email'
              value={formState.email}
              onChange={handleChangeInput}
              className='input-ressetpassword'
            />
          </div>

          {responseApiState.error && (
            <span className='error'>{responseApiState.error}</span>
          )}
          {
            responseApiState.loading
              ? <span className='span-ressetpassword'>Cargando...</span>
              : (
                responseApiState.data
                  ? <span className='span-ressetpassword'>Se te envió un mail con los pasos a seguir</span>
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
                Aún no tengo cuenta
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
	)
}

export default ResetPasswordScreen