import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldBean } from '../api/HelloWorldApiService'

function WelcomeComponent(){

    const {username} = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi(){
        console.log('called')
        // axios.get('http://localhost:8080/hello-world')
        //     .then( (response) => successResponse(response) )
        //     .catch( (error) => errorResponse(error) )

        // retrieveHelloWorld
        //     .then( (response) => successResponse(response) )
        //     .catch( (error) => errorResponse(error) )
        //     .finally(() => console.log('cleanup'))

        retrieveHelloWorldBean
            .then( (response) => successResponse(response) )
            .catch( (error) => errorResponse(error) )
            .finally(() => console.log('cleanup'))
    }

    function successResponse(response){
        console.log(response)
        // setMessage(response.data)
        setMessage(response.data.message)
    }
    
    function errorResponse(error){
        console.log(error)
    }


    return(
        <div className="Welcome">
            <h1>Welcome Back, {username}</h1>
            <div>
                Manage your Todos- <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
            </div>
            <div className="text-info">{message}</div>
            
        </div>
    )
}

export default WelcomeComponent