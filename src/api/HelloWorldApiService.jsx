import axios from 'axios'

// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

// export const retrieveHelloWorld = axios.get('http://localhost:8090/hello-world')

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8090'
    }
);

export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean')

