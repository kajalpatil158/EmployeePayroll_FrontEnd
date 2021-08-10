import Axios from 'axios';
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

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
    * @return- token is within header
   */

    addEmployee = (userData) => {
        return Axios.post(`http://localhost:7000/addEmployee`, userData)
    }

    /**
   * @description- get employee data is Perform
   * @return- token is within header
   */ 

     getAllEmployees = () => {
        const headers = this.getToken();
        {
        return Axios.get(`http://localhost:7000/empPayroll`)
        }
    }

    updateEmployee = (userData) => {
      const headers = this.getToken();
      {
      return Axios.put('http://localhost:7000/update/'+userData._id)
  }
}

    deleteEmployee = (_id) => {
      const headers = this.getToken();
      {
      return Axios.delete(`http://localhost:7000/delete/`+_id)
      }
    }
  }

export default Service