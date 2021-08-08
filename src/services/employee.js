import Axios from 'axios';
const BASE_URL="http://localhost:7000"
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

class Employee {

    /**
     * @description Method to return token from local storage
     * @return token within headers
     */
    getToken = () => {
      const headers = {
        headers: { Authorization: localStorage.getItem("token") },
      };
      return headers;
    };

    getAllEmployees = async () => {
        const headers = this.getToken();
        try {
          const res = await axios.get("http://localhost:7000/empPayroll", headers);
          return res;
        } catch (error) {
          return error;
        }
      };

      insertEmployees = async (data) => {
        const headers = this.getToken();
        try {
          const res = await axios.post("http://localhost:7000/addEmployee", data, headers);
          return res;
        } catch (error) {
          return error;
        }
      };

      updateEmployee = async (employeeData) => {
        const headers = this.getToken();
        try {
          const res = await axios.put("http://localhost:7000/update" + employeeData._id, employeeData, headers);
          return res;
        } catch (error) {
          return error;
        }
      };

      deleteEmployee = async (empId) => {
        const headers = this.getToken();
        try {
          const res = await axios.delete("http://localhost:7000/delete" + empId, headers);
          return res;
        } catch (error) {
          return error;
        }
      };
    
    }

    export default new Employee();