import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import  './stylesScreens/styleHome.css'

import { useNavigate } from 'react-router-dom'
import isAuthenticatedState from '../context/AuthContext'

const HomeScreen = () => {
	const { isAuthenticatedState } = useContext(AuthContext)
	return (
		<div>
		/* <body className = "home"> */
		{/* <!-- Navegación --> */}

		<header class="header">
			<div class="container header-container">
				<div class="logo-nav">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png" alt="Slack" class="logo"/>
					<nav class="main-nav">
						<ul>
							<li class="dropdown">
								<a href="#">Funciones <span class="arrow-down">▼</span></a>
							</li>
							<li class="dropdown">
								<a href="#">Soluciones <span class="arrow-down">▼</span></a>
							</li>
							<li>
								<a href="#">Empresa</a>
							</li>
							<li class="dropdown">
								<a href="#">Recursos <span class="arrow-down">▼</span></a>
							</li>
							<li>
								<a href="#">Precios</a>
							</li>
						</ul>
					</nav>
				</div>
				<div class="header-buttons">
					<button class="btn btn-outline">HABLAR CON VENTAS</button>
					<button class="btn btn-primary">CREA UN NUEVO ESPACIO DE TRABAJO</button>
				</div>
			</div>
		</header>
	
		{/* <!-- Contenido principal --> */}
		<main class="main-content">
			<div class="container">
				{/* <!-- Saludo --> */}
				<div class="greeting">
					<h1><span class="wave-emoji">👋</span>¡Hola otra vez!</h1>
				</div>
	
				{/* <!-- Contenedor de espacios de trabajo --> */}
				<div class="workspaces-container">
					<div class="workspace-header">
						Espacios de trabajo de 
					</div>
	
					{/* <!-- Espacio de trabajo 1 --> */}
					<div class="workspace-item">
						<div class="workspace-info">
							<div class="workspace-icon">
								<div class="icon-left"></div>
								<div class="icon-right"></div>
							</div>
							<div class="workspace-details">
								<div class="workspace-name"></div>
								<div class="workspace-members">
									<div class="member-avatars">
										<div class="avatar"></div>
										<div class="avatar"></div>
										<div class="avatar"></div>
										<div class="avatar"></div>
									</div>
									<span class="member-count"></span>
								</div>
							</div>
						</div>
						<button class="btn btn-slack" id="iniciar-slack-1">INICIAR SLACK</button>
					</div>

					{/* <!-- Ver más --> */}
					<div class="ver-mas">
						<button id="ver-mas-btn">Ver más <span class="arrow-down">▼</span></button>
					</div>
				</div>
	
				{/* <!-- Crear nuevo espacio de trabajo --> */}
				<div class="new-workspace-container">
					<div class="new-workspace-content">
						<div class="new-workspace-text">
							<p>¿Quieres usar Slack con un equipo distinto?</p>
							<button class="btn btn-primary" id="crear-espacio-btn">CREA UN NUEVO ESPACIO DE TRABAJO</button>
						</div>
					</div>
				</div>
	
				{/* <!-- Texto de ayuda --> */}
				<div class="help-text">
					¿No puedes ver tu espacio de trabajo? <a href="#" class="link">Prueba con un correo electrónico diferente →</a>
				</div>
			</div>
		</main>
	
		{/* <!-- Pie de página --> */}
		<footer class="footer">
			<div class="container">
				<h2>Aprende a usar Slack para trabajar</h2>
			</div>
		</footer>
	
		<script src="script.js"></script>
	</body>
	</div>
	)
}

export default HomeScreen



