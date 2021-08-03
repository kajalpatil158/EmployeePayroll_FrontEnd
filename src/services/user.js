
import Axios from 'axios';
//const BASE_URL="http://localhost:7000"
//Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export default class Service{
    login = (loginData) => {
        return Axios.post('http://localhost:7000/login', loginData)
    }

    register = (registerData) => {
        return Axios.post('http://localhost:7000/register', registerData)
    }
}

