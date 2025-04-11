import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, useParams } from 'react-router-dom'
import '../styles/HomeScreen.css'
import { useNavigate } from 'react-router-dom'
import isAuthenticatedState from '../context/AuthContext'
import { useApiRequest } from '../hooks/useApiRequest'

import ENVIROMENT from '../config/enviroment'
import { useEffect } from 'react'
import { ServerError } from '../utils/error'


const HomeScreen = () => {

	

	const { isAuthenticatedState } = useContext(AuthContext)
	return (

		
			
		
		<div className ="home">
		<header className ="header-home">
			<div className ="container header-container">
				<div className ="logo-nav">
					<img src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png" alt="Slack" className ="logo"/>
				</div>
				
			
					
					
					
				
			</div>
		</header>
		
		{/* <!-- Contenido principal --> */}
		<main className ="main-content">
			<div className ="container">
				{/* <!-- Saludo --> */}
				<div className ="greeting">
					<h1><span className ="wave-emoji">👋</span>¡Hola otra vez! </h1>
				</div>
	
				{/* <!-- Contenedor de espacios de trabajo --> */}
				<div className ="workspaces-container">
					<div className="workspace-header">
						Espacios de trabajo de Slack
					</div>			





					
	

					<div className ="ver-mas">
						<button id="ver-mas-btn"></button>
					</div>
				</div>
	
				{/* <!-- Crear nuevo espacio de trabajo --> */}
				<div className ="new-workspace-container">
					<div className ="new-workspace-content">
						<div className ="new-workspace-text">
							<p>¿Quieres usar Slack con un equipo distinto?</p>
							<Link>
							<button className ="btn btn-primary" id="crear-espacio-btn">CREA UN NUEVO ESPACIO DE TRABAJO</button>
							</Link>
						</div>
					</div>
				</div>
	
				{/* <!-- Texto de ayuda --> */}
				<div className ="help-text">
					¿No puedes ver tu espacio de trabajo? <a href="#" className ="link">Prueba con un correo electrónico diferente →</a>
				</div>
			</div>
		</main>
	

	</div> 
	
	)
}

export default HomeScreen



