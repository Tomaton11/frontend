import React from 'react'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest.jsx'
import ENVIROMENT from '../config/enviroment'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'




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
		<div>
			<h1>Conectarse a Slack</h1>
			<form onSubmit={handleSubmitForm}>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type="email"
						id='email'
						name='email'
						placeholder='joedoe@mail.com'
						value={formState.email}
						onChange={handleChangeInput}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="text"
						id='password'
						name='password'
						value={formState.password}
						onChange={handleChangeInput}
					/>
				</div>
				{responseApiState.error && <span style={{ color: 'red' }}>{responseApiState.error}</span>}
				{
					responseApiState.loading
						? <span>Cargando</span>
						: <button>Iniciar sesion</button>

				}
				<Link to='/reset-password'>
					<br />
					Olvide mi contraseña

				</Link>
				<br />

				<Link to='/register'>
					Registrate
				</Link>
			</form>
	</div>
	)
}

export default LoginScreen