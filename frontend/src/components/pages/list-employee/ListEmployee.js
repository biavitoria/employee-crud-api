/**
 * file: scr/components/pages/list-employee/ListEmployee.js
 * data: 15/11/2025
 * description: arquivo responsável pela lógica do componente
 *   'ListEmployeeComponent.vue'
 * author: Beatriz Brandão <beatrizvsbrandao@gmail.com>
 */

import EmployeeServices from '@/services/EmployeeServices';

export default {
  name: 'ListEmpoyeeConponent',
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    this.listAllEmployees();
  },
  methods: {
    async listAllEmployees() {
      const response = await EmployeeServices.getEmployees();
      this.employees = response;
    },
  },
};
