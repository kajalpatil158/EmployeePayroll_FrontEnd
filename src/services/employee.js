import Axios from 'axios';
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
const TOKEN = localStorage.getItem('token') ;

class Service {
    addEmployee = (userData) => {
        return Axios.post(`http://localhost:7000/addEmployee`, userData, {
            headers: {
                'token': TOKEN
            }
        })
    }

    getEmployee = () => {
        return Axios.get(`/empPayroll`, {
            headers: {
                'token': TOKEN
            }
        })
    }
    deleteEmployee = (_id) => {
        // console.log("user id:",_id)
        return Axios.delete(`/delete/`+_id, {
            headers: {
                'token': TOKEN
            }
        })
    }
}

export default Service;