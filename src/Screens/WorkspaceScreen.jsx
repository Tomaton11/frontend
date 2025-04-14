import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ENVIROMENT from '../config/enviroment';

const WorkspaceScreen = () => {
	const { workspaceId } = useParams();
	const [workspace, setWorkspace] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchWorkspace = async () => {
			try {
				const token = localStorage.getItem('token');
				const res = await fetch(`${ENVIROMENT.URL_API}/api/workspaces/${workspaceId}`, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});
				const data = await res.json();

				if (res.ok) {
					setWorkspace(data.data.workspace);
				} else {
					setError(data.message || 'Error al cargar workspace');
				}
			} catch (err) {
				setError('Error de conexión con el servidor');
			} finally {
				setLoading(false);
			}
		};

		fetchWorkspace();
	}, [workspaceId]);

	if (loading) return <p>Cargando workspace...</p>;
	if (error) return <p style={{ color: 'red' }}>{error}</p>;

	return (
		<div style={{ padding: '32px' }}>
            
			<button onClick={() => navigate('/home')}>← Volver</button>
			<h1>{workspace.name}</h1>

			<h3>Miembros:</h3>
			<ul>
				{workspace.members.map((memberId) => (
					<li key={memberId}>{memberId}</li>
				))}
			</ul>
		</div>
	);
};

export default WorkspaceScreen;
