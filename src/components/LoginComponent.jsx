import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../security/AuthContext"

function LoginComponent(){

    const [username, setUsername] = useState('user')
    const [password, setPassword] = useState('pass')

    const [showErrorMessage, setErrorMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        }else{
            setErrorMessage(true)
        }
    }


    return(
        
        <div className="Login">

            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please use valid Credentials</div>}

            <div className="LoginForm">
                <h1>Sign In</h1>
                <div >
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                    
                <div>
                    <button type="name" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent