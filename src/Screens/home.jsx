import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useApiRequest } from '../hooks/useApiRequest'
import ENVIROMENT from '../config/enviroment'
import '../styles/HomeScreen.css'

const HomeScreen = () => {
	const { userId } = useParams(); // Obtener el ID desde la URL
	const navigate = useNavigate();
	const { isAuthenticatedState } = useContext(AuthContext);
	const [workspaces, setWorkspaces] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!isAuthenticatedState) {
			navigate('/login');
		}
	}, [isAuthenticatedState, navigate]);

	useEffect(() => {
		const fetchWorkspaces = async () => {
			try {
				const res = await fetch(`${ENVIROMENT.URL_API}/api/:workspace_id`);
				const data = await res.json();
				if (res.ok) {
					setWorkspaces(data.data || []);
				} else {
					setError(data.message || 'Error al cargar workspaces');
				}
			} catch (err) {
				setError('Error de conexión con el servidor');
			} finally {
				setLoading(false);
			}
		};

		if (userId) {
			fetchWorkspaces();
		}
	}, [userId]);

	return (
		<div className="home">
			<header className="header-home">
				<div className="container header-container">
					<div className="logo-nav">
						<img
							src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png"
							alt="Slack"
							className="logo"
						/>
					</div>
				</div>
			</header>

			<main className="main-content">
				<div className="container">
					<div className="greeting">
						<h1><span className="wave-emoji">👋</span>¡Hola otra vez!</h1>
					</div>

					<div className="workspaces-container">
						<div className="workspace-header">
							Espacios de trabajo de Slack
						</div>

						{loading && <p>Cargando workspaces...</p>}
						{error && <p className="error">{error}</p>}

						{!loading && workspaces.length === 0 && (
							<p className="no-workspaces">No tienes espacios de trabajo aún.</p>
						)}

<ul className="workspace-list">
  {workspaces.length > 0 ? (
    workspaces.map((workspace) => (
      <li
        key={workspace._id}
        className="workspace-item"
        onClick={() => navigate(`/workspace/${workspace._id}`)}
      >
        {workspace.name}
      </li>
    ))
  ) : (
    <p className="no-workspaces">No tienes espacios de trabajo todavía.</p>
  )}
</ul>

					</div>

					<div className="new-workspace-container">
						<div className="new-workspace-content">
							<div className="new-workspace-text">
								<p>¿Quieres usar Slack con un equipo distinto?</p>
								<Link to="/register-workspace">
									<button className="btn btn-primary" id="crear-espacio-btn">
										CREA UN NUEVO ESPACIO DE TRABAJO
									</button>
								</Link>
							</div>
						</div>
					</div>

					<div className="help-text">
						¿No puedes ver tu espacio de trabajo? <a href="#" className="link">Prueba con un correo electrónico diferente →</a>
					</div>
				</div>
			</main>
		</div>
	);
};

export default HomeScreen;
