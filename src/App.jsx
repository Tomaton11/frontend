import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ResetPasswordScreen from './Screens/ResetPasswordScreen'
import RewritePasswordScreen from './Screens/RewritePasswordScreen'
import ProtectedRoute from './Components/ProptectedRoute'
import HomeScreen from './Screens/home'
import CrearWorkspace from './Screens/Workspaces'
import WorkspaceScreen from './Screens/WorkspaceScreen'

function App() {

    return (
        <div>
            <Routes>

                    <Route path='/login' element={<LoginScreen />} />

                    <Route path="/register" element={<RegisterScreen />} />

                    <Route path="/" element={<HomeScreen />} />

                    <Route path="/workspace/:id" element={<WorkspaceScreen />} />

                    <Route path="/home/:userId" element={<HomeScreen />} />
                    
                    <Route path='/reset-password' element={<ResetPasswordScreen />} />

                    <Route path='/rewrite-password' element={<RewritePasswordScreen />}/>

                    {/* <Route path='/home' element={<HomeScreen />} /> */}



            </Routes>
        </div>
    )
}

export default App