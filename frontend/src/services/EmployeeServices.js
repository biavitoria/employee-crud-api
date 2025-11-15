/**
 * file: src/services/EmployeeServices.js
 * data: 15/11/2025
 * description: arquivo responsável pelos métodos de requisições das Apis via HTTP
 * author: Beatriz Vitória <beatrizvsbrandao@gmail.com>
 */

import Api from './Api';

export default {
  /**
  * Método responsável por criar um novo 'Employee'
  * (POST): localhost:3000/api/employees
  */
  async createNewEmployee(employee) {
    try {
      const response = await Api().post('/employees', employee);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
  * Método responsável por listar todos os 'Employees'
  * (GET): localhost:3000/api/employees
  */
  async getEmployees() {
	  try {
  		const response = await Api().get(('/employees'));
    	return response.data;
    } catch (error) {
    	return console.log(error);
    }
  },

  /**
  * Método responsável por listar por Id um determinado 'Employee'
  * (GET): localhost:3000/api/employees/:id
  */
  async getEmployeesId(id) {
  	try {
      const response = await Api().get((`/employees/${id}`));
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
  * Método responsável por atualizar um determinado 'Employee' por Id
  * (PUT): localhost:3000/api/employees/:id
  */
  async updateEmployee(id) {
    try {
      const response = await Api().put((`/employee/${id}`));
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
  * Método responsável por deletar um determinado 'Employee' por Id
  * (DELETE): localhost:3000/employees/:id
  */
  async deleteEmployee(id) {
    try {
      const response = await Api().delete((`/employees/${id}`));
      return response.data;
    } catch (error) {
	    return console.log(error);
    }
  },
};
