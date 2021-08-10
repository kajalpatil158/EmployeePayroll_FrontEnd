import Axios from 'axios';
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
const TOKEN = localStorage.getItem('token') ;

class Service {
    /**
   * @description- Method to return token from local storage
   * @return- token within headers
   */
  getToken = () => {
    const headers = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    return headers;
  };

  /**
   * @description- Add Employee Operation is Perform
   * @return token within headers
   */

    addEmployee = (userData) => {
        console.log(TOKEN);
        return Axios.post(`/addEmployee`, userData)
    }

    /**
   * @description- get employee data is Perform
   * @return token within headers
   */ 

    getEmployee = () => {
        return Axios.get(`/empPayroll`)
    }


    deleteEmployee = (_id) => {
        return Axios.delete(`/delete/`+_id, {
            headers: {
                'token': TOKEN
            }
        })
    }
}

export default Service;