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
<div className='rewrite'>
  <header className="rewrite-header">	
    <div className="rewrite-header-left"></div>	
    <div className="rewrite-logo-container">
      <img 
        src="https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg" 
        alt="Slack"
        className="rewrite-logo" 
      /> 
    </div>
  </header>

  <main className='rewrite-main'>
    <h1 className='rewrite-title'>Establecer nueva contraseña</h1>
    <form onSubmit={handleSubmitForm} className='rewrite-form'>
      <input 
        type="password" 
        id='password' 
        name='password' 
        placeholder='Contraseña_123*' 
        value={formState.password} 
        onChange={handleChangeInput}
        className='rewrite-input'
      />

      {responseApiState.error && <span className='rewrite-error'>{responseApiState.error}</span>}

      {responseApiState.loading ? (
        <span className='rewrite-span'>Cargando</span>
      ) : (
        responseApiState.data 
          ? <span className='rewrite-span'>Enviado</span>
          : <button className='rewrite-button'>Establecer nueva contraseña</button>
      )}
    </form>
  </main>
</div>
	)
}

export default RewritePasswordScreen