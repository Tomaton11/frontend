import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import '../styles/HomeScreen.css'
import { useNavigate } from 'react-router-dom'
import isAuthenticatedState from '../context/AuthContext'

const HomeScreen = () => {
	const { isAuthenticatedState } = useContext(AuthContext)
	return (

		
		<div className ="home">
		<header className ="header">
			<div className ="container header-container">
				<div className ="logo-nav">
					<img src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png" alt="Slack" className ="logo"/>
					<nav className ="main-nav">
						<ul>
							<li className ="dropdown">
								<a href="#">Funciones <span className ="arrow-down">▼</span></a>
							</li>
							<li className ="dropdown">
								<a href="#">Soluciones <span className ="arrow-down">▼</span></a>
							</li>
							<li>
								<a href="#">Empresa</a>
							</li>
							<li className ="dropdown">
								<a href="#">Recursos <span className ="arrow-down">▼</span></a>
							</li>
							<li>
								<a href="#">Precios</a>
							</li>
						</ul>
					</nav>
				</div>
			<div className ="header-buttons">
					<button className ="btn btn-outline">HABLAR CON VENTAS</button>
					<Link to = "/workspaces">
						<button className ="btn btn-outline">CREAR NUEVO ESPACIO DE TRABAJO</button>
					</Link>
				</div>
			</div>
		</header>
		
		{/* <!-- Contenido principal --> */}
		<main className ="main-content">
			<div className ="container">
				{/* <!-- Saludo --> */}
				<div className ="greeting">
					<h1><span className ="wave-emoji">👋</span>¡Hola otra vez! { isAuthenticatedState ? <span>Bienvenido, { user.email }</span> : <span>Bienvenido</span> }</h1>
				</div>
	
				{/* <!-- Contenedor de espacios de trabajo --> */}
				<div className ="workspaces-container">
					<div className="workspace-header">
						Espacios de trabajo de 
					</div>
	
					{/* <!-- Espacio de trabajo 1 --> */}
					<div className ="workspace-item">
						<div className ="workspace-info">
							<div className ="workspace-icon">
								<div className ="icon-left"></div>
								<div className ="icon-right"></div>
							</div>
							<div className ="workspace-details">
								<div className ="workspace-name"></div>
								<div className ="workspace-members">
									<div className ="member-avatars">
										<div className ="avatar"></div>
										<div className ="avatar"></div>
										<div className ="avatar"></div>
										<div className ="avatar"></div>
									</div>
									<span className ="member-count"></span>
								</div>
							</div>
						</div>
						<button className ="btn btn-slack" id="iniciar-slack-1">INICIAR SLACK</button>
					</div>

					{/* <!-- Ver más --> */}
					<div className ="ver-mas">
						<button id="ver-mas-btn">Ver más <span className ="arrow-down">▼</span></button>
					</div>
				</div>
	
				{/* <!-- Crear nuevo espacio de trabajo --> */}
				<div className ="new-workspace-container">
					<div className ="new-workspace-content">
						<div className ="new-workspace-text">
							<p>¿Quieres usar Slack con un equipo distinto?</p>
							<button className ="btn btn-primary" id="crear-espacio-btn">CREA UN NUEVO ESPACIO DE TRABAJO</button>
						</div>
					</div>
				</div>
	
				{/* <!-- Texto de ayuda --> */}
				<div className ="help-text">
					¿No puedes ver tu espacio de trabajo? <a href="#" className ="link">Prueba con un correo electrónico diferente →</a>
				</div>
			</div>
		</main>
	
		{/* <!-- Pie de página --> */}
		<footer className ="footer">
			<div className ="container">
				<h2>Aprende a usar Slack para trabajar</h2>
			</div>
		</footer>
	</div>			
	)
}

export default HomeScreen



