import React from 'react'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest.jsx'
import ENVIROMENT from '../config/enviroment'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginScreen.css'

/* const LoginScreen = () => {
	const {login} = useContext(AuthContext)
	const initialFormState ={
		email: '',
		password: ''
	}
	const { formState, handleChangeInput } = useForm(initialFormState)
	const { responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/login')

	useEffect(
		()=>{
			if(responseApiState.data) {
				login(responseApiState.data.data.authorization_token);
				navigate("/home"); // Redirigir al inicio después de iniciar sesión
			}
		},
		//Cada vez que cambie mi estado de respuesta ejecutare el efecto
		[responseApiState, login]	
	)
	const handleSubmitForm = async (e) =>{
		e.preventDefault()
		await postRequest(formState)
	} */

const LoginScreen = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate(); // Hook para redirigir

	const initialFormState = {
		email: "",
		password: "",
	};

	const { formState, handleChangeInput } = useForm(initialFormState);
	const { responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + "/api/auth/login");

	useEffect(() => {
		if (responseApiState.data) {
			login(responseApiState.data.data.authorization_token);
			navigate("/"); // Redirigir al inicio después de iniciar sesión
		}
	}, [responseApiState, login, navigate]); // Asegurar dependencias correctas

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		await postRequest(formState);
	};




	return (
		//div padre
		<div className="login">

			{/* Header with logo and sign up link */}
			<header className="header-login">	
				<div className="header-left"></div>	
				<div className="logo-container">
					<img 
						src="https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg" 
						alt="Slack"
						className="logo-login" /> 
				</div>


			</header>
			
			{/* Main  */}
			<main className="main-login">
			<div>
				<h1 className='h1-login'>Conectarse a Slack</h1>
				
				<form onSubmit={handleSubmitForm}>
					<div>
						<label htmlFor='email' className='label-login'>Email</label>
						<input
							type="email"
							id='email'
							name='email'
							placeholder='joedoe@mail.com'
							value={formState.email}
							onChange={handleChangeInput}
							className='input-login'
						/>
					</div>
					<div>
						<label htmlFor="password" className='label-login'>Contraseña</label>
						<input
							type="password"
							id='password'
							name='password'
							placeholder='contraseña_123*'
							value={formState.password}
							onChange={handleChangeInput}
							className='input-login'	
							
						/>
					</div>


				<div className="forgot">
					<div className="fotgot">
						<Link className="create-account-link" to ="/reset-password"  >
							¿Olvidaste tu contraseña?
						</Link>
					</div>
				</div>

					{responseApiState.error && <span style={{ color: 'red' }} className='error' >{responseApiState.error}</span>}
					{
						responseApiState.loading
							? <span className='span-login'>Cargando</span>
							: <button className='btn-login'>Iniciar sesion</button>
					}
					
					
				<div className="signup-container">
					<div className="signup-text">
						<p className="new-user-text">¿Nuevo en Slack?</p>
						<Link className="create-account-link" to = "/register">
							Crear una cuenta
						</Link>
					</div>
				</div>


				</form>

				
		
		
	</div>
</main>

	</div>// cierre div padre				
	)
	} 


export default LoginScreen