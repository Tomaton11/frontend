import React, { useState } from 'react'

const RegisterScreen = () => {
        const formInitialState = {
            username: '',
            email: '',
            password: ''
        }
        const [formState, setFormState] = useState(formInitialState)    
        const handleChangeInput = (event) => {
            const { name, value } = event.target
            setFormState (
                (prevFormState) => {
                    const formState = {...prevFormState}
                    return {...prevFormState, [name]: value}
                })
        }
    
            const handleSubmitForm = async (event) => {
                event.preventDefault() 

                    //enviar el formulario ( osea el objeto formState ) al backend
                    // consulta http
                    //fetch es una funcion que nos permite hacer consultas http
                    //recibe la URL a consultar y un objeto de configuracion 
                    //URL : string
                    //objeto : object {method, headres, body ( solo si la consulta no es GET )}



                const response = await fetch(
                'htpp://localhost:3000/api/auth/register',
                    {
                    method: 'POST',
                    headers : {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(formState)
                    }
                )
                
            

    return (
    <div>
        <h1>Registrate en nuestra app</h1>
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input placeholder='Joe Doe' type="text" id='username' name='username' value={formState.username} onChange={handleChangeInput}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input placeholder='joedoe@email.com' type="text" id='email' name='email' value={formState.email} onChange={handleChangeInput}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input placeholder='Example_password123' type="text" id='password' name='password' value={formState.password} onChange={handleChangeInput}/>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
)
}

export default RegisterScreen