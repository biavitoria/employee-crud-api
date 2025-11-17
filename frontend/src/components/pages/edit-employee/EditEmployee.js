/**
 * file: scr/components/pages/edit-employee/EditEmployee.js
 * data: 17/11/2025
 * description: arquivo responsável pela lógica do componente
 *   'EditEmployeeComponent.vue'
 * author: Beatriz Brandão <beatrizvsbrandao@gmail.com>
 */

import EmployeeServices from '@/services/EmployeeServices';

export default {
  name: 'EditEmpoyeeComponent',
  data() {
    return {
      employeeForm: {},
    };
  },
  mounted() {
    this.getEmployeeById();
  },
  methods: {
    async getEmployeeById() {
      const { id } = this.$route.params;
      const response = await EmployeeServices.getEmployeesId(id);
      this.employeeForm = { ...response };
    },

    async updateFormEmployee() {
      const { id } = this.$route.params;
      await EmployeeServices.updateEmployee(id, this.employeeForm);
      this.$router.push({ name: 'list' });
    },
  },
};
