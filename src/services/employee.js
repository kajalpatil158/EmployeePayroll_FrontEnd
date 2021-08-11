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
        return Axios.post(`/addEmployee`, userData)
    }

    /**
   * @description- get employee data is Perform
   * @return- token is within header
   */ 

     getAllEmployees = () => {
        const headers = this.getToken();
        {
        return Axios.get(`/empPayroll`)
        }
    }
   
    /**
   * @description- update employee data is Perform
   * @return- token is within header
   */ 

    updateEmployee = (userData) => {
      const headers = this.getToken();
      {
      return Axios.put('/update/'+userData._id)
  }
}

    /**
   * @description- delete employee data is Perform
   * @return- token is within header
   */ 

    deleteEmployee = (_id) => {
      const headers = this.getToken();
      {
      return Axios.delete(`/delete/`+_id)
      }
    }
  }

export default Service