
import Axios from 'axios';
//const BASE_URL=process.env.REACT_APP_BASE_URL
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export default class Service{
    login = (loginData) => {
        return Axios.post('/login', loginData)
    }

    register = (registerData) => {
        return Axios.post('/register', registerData)
    }
}

