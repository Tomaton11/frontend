// src/pages/WorkspaceScreen.jsx
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApiRequest } from '../hooks/useApiRequest'
import ENVIROMENT from '../config/enviroment'
import '../styles/WorkspaceScreen.css'

const WorkspaceScreen = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { responseApiState, getRequest } = useApiRequest(`${ENVIROMENT.URL_API}/api/:workspaces_id`)
  const [workspace, setWorkspace] = useState(null)

  useEffect(() => {
    const fetchWorkspace = async () => {
      await getRequest()
    }

    fetchWorkspace()
  }, [id])

  useEffect(() => {
    if (responseApiState.data) {
      setWorkspace(responseApiState.data.data)
    }
  }, [responseApiState])

  if (responseApiState.loading) return <p className="loading">Cargando...</p>
  if (responseApiState.error) return <p className="error">Error: {responseApiState.error}</p>

  return (
    <div className="workspace-detail">
      <button className="btn-back" onClick={() => navigate(-1)}>← Volver</button>
      {workspace ? (
        <div className="workspace-card">
          <h1>{workspace.name}</h1>
          <p>ID: {workspace._id}</p>
          {/* Agrega más detalles si tienes */}
        </div>
      ) : (
        <p>No se encontró el workspace.</p>
      )}
    </div>
  )
}

export default WorkspaceScreen
