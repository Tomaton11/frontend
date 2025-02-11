import React from 'react'

const RegisterScreen = () => {
    return (
    <div>
        <h1>Registrate en nuestra app</h1>
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input placeholder='Joe Doe' type="text" id='username' name='username'/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input placeholder='joedoe@email.com' type="text" id='email' name='email'/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input placeholder='Example_password123' type="text" id='password' name='password'/>
            </div>
            <button>Register</button>
        </form>
    </div>
)
}

export default RegisterScreen