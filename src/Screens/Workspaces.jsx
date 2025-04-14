import React, { useEffect, useContext, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useApiRequest } from '../hooks/useApiRequest';
import ENVIROMENT from '../config/enviroment';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/createworkspaces.css';

const CrearWorkspace = () => {
	const formInitialState = {
		name: '',
		description: ''
	};

	const { formState, handleChangeInput } = useForm(formInitialState);
	const { responseApiState, postRequest } = useApiRequest(`${ENVIROMENT.URL_API}/api/workspaces`);
	const navigate = useNavigate();

	const handleSubmitForm = async (event) => {
		event.preventDefault();
		await postRequest(formState);

		// Si se creó con éxito, redirige al home
		if (responseApiState.data) {
			setTimeout(() => navigate('/home'), 1500);
		}
	};

	return (
		<div className="createworkspaces">
			<header className="createworkspaces-header">
				<div className="createworkspaces-header-left"></div>
				<div className="createworkspaces-logo-container">
					<img
						src="https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg"
						alt="Slack"
						className="createworkspaces-logo"
					/>
				</div>
			</header>

			<main className="createworkspaces-main">
				<h1 className="createworkspaces-title">Crear un nuevo Workspace</h1>

				<form className="createworkspaces-form" onSubmit={handleSubmitForm}>
					<input
						className="createworkspaces-input"
						type="text"
						id="name"
						name="name"
						placeholder="Nombre del workspace"
						value={formState.name}
						onChange={handleChangeInput}
						required
					/>

					{responseApiState.error && (
						<span className="createworkspaces-error">{responseApiState.error}</span>
					)}

					{responseApiState.loading ? (
						<span className="createworkspaces-span">Cargando...</span>
					) : responseApiState.data ? (
						<span className="createworkspaces-span">WORKSPACE CREADO ✅</span>
					) : (
						<button className="createworkspaces-button" type="submit">
							Crear workspace
						</button>
					)}
				</form>
			</main>
		</div>
	);
};

export default CrearWorkspace;
