/**
 * file: scr/components/pages/create-employee/CreateEmployee.js
 * data: 15/11/2025
 * description: arquivo responsável pela lógica do componente
 *   'CreateEmployeeComponent.vue'
 * author: Beatriz Brandão <beatrizvsbrandao@gmail.com>
 */

import EmployeeServices from '@/services/EmployeeServices';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
  name: 'CreateEmployeeComponent',
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      employeeForm: {
        name: null,
        job_role: null,
        salary: null,
        birth: null,
        employee_registration: null,
      },
      isSubmitted: false,
    };
  },
  validations() {
    return {
      employeeForm: {
        name: { required },
        job_role: { required },
        salary: { required },
        birth: { required },
        employee_registration: { required },
      },
    };
  },
  methods: {
    handleSubmitForm() {},

    async submitNewEmployee() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();
        if (this.v$.$invalid) {
          this.$swal('Oops!', 'You need to include all the required fields!', 'error');
          return;
        }

        await EmployeeServices.createNewEmployee(this.employeeForm);
        this.$swal({
          title: 'Employee added successfully!',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        }).then((data) => {
          this.$router.push({
            name: 'list',
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
