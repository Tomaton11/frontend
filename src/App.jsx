import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ResetPasswordScreen from './Screens/ResetPasswordScreen'
import RewritePasswordScreen from './Screens/RewritePasswordScreen'
import ProtectedRoute from './Components/ProptectedRoute'
import HomeScreen from './Screens/home'
import CrearWorkspace from './Screens/Workspaces'

function App() {

    return (
        <div>
            <Routes>

                    <Route path='/login' element={<LoginScreen />} />

                    <Route path="/register" element={<RegisterScreen />} />

                    <Route path='/workspaces' element={<CrearWorkspace />} />
                    <Route element = {<ProtectedRoute/>}>
                    <Route path='/' element={<HomeScreen />} />
                    </Route>
                    
                    <Route path='/reset-password' element={<ResetPasswordScreen />} />

                    <Route path='/rewrite-password?reset_token=' element={<RewritePasswordScreen />}/>

                    {/* <Route path='/home' element={<HomeScreen />} /> */}



            </Routes>
        </div>
    )
}

export default App