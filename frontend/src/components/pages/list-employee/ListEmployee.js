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

    async removeEmployee(id) {
		  this.$swal({
			  title: 'Are you sure you want to remove the employee?',
			  text: 'Watch out! This employee will be deleted',
			  icon: 'warning',
			  showConfirmButton: true,
			  allowOutsideClick: false,
			  allowEnterKey: true,
			  allowEscapeKey: false,
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Yes! Please, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await EmployeeServices.deleteEmployee(id);
          this.$swal('Deleted', 'Successfully delete', 'success');
          this.listAllEmployees();
        } else if (result.dismiss) {
          this.$swal('Cancelled', 'Cancel deletion', 'info');
        }
      });
    },
  },
};
