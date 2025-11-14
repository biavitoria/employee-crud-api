<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add New Employee</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSubmitForm()">

          <!-- INICIO BLOCO: Employee Name -->
           <div class="mb-3">
            <label class="fw-bold">Employee Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Type Your Name"
              v-model="employeeForm.name"
              :class="{ 'is-invalid': isSubmitted && v$.employeeForm.name.$error }"
            >
            <div
              v-if="isSubmitted && v$.employeeForm.name.required.$invalid"
              class="invalid-feedback">'Employee Name' field is required!
            </div>
           </div>
          <!-- FIM BLOCO: Employee Name -->

          <!-- INICIO BLOCO: Job Role -->
           <div class="mb-3">
            <label class="fw-bold">Job Role</label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              placeholder="Type Your Job Role"
              v-model="employeeForm.job_role"
              :class="{ 'is-invalid': isSubmitted && v$.employeeForm.job_role.$error }"
            >
            <div
              v-if="isSubmitted && v$.employeeForm.job_role.required.$invalid"
              class="invalid-feedback">'Job Role' field is required!
            </div>
           </div>
          <!-- FIM BLOCO: Job Role -->

          <!-- INICIO BLOCO: Salary -->
           <div class="mb-3">
            <label class="fw-bold">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              placeholder="Type Your Salary"
              v-model="employeeForm.salary"
              :class="{ 'is-invalid': isSubmitted && v$.employeeForm.salary.$error }"
            >
            <div
              v-if="isSubmitted && v$.employeeForm.salary.required.$invalid"
              class="invalid-feedback">'Salary' field is required!
            </div>
           </div>
          <!-- FIM BLOCO: Salary -->

          <!-- INICIO BLOCO: Birth -->
           <div class="mb-3">
            <label class="fw-bold">Birth</label>
            <input
              type="date"
              id="birth"
              name="birth"
              class="form-control"
              placeholder="YYYY/MM/DD"
              v-model="employeeForm.birth"
              :class="{ 'is-invalid': isSubmitted && v$.employeeForm.birth.$error }"
            >
            <div
              v-if="isSubmitted && v$.employeeForm.birth.$invalid"
              class="invalid-feedback">'Birth' field is required!
            </div>
           </div>
          <!-- FIM BLOCO: Birth -->

          <!-- INICIO BLOCO: Employee Registration -->
           <div class="mb-3">
            <label class="fw-bold">Employee Registration</label>
            <input
              type="text"
              id="employee_registration"
              name="employee_registration"
              class="form-control"
              placeholder="Employee Registration"
              v-model="employeeForm.employee_registration"
              :class="{ 'is-invalid': isSubmitted && v$.employeeForm.employee_registration.$error }"
            >
            <div
              v-if="isSubmitted && v$.employeeForm.employee_registration.$invalid"
              class="invalid-feedback">'Employee Registration' field is required!
            </div>
           </div>
          <!-- FIM BLOCO: Employee Registration -->
          <div class="mb-3">
            <button
              class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']"/> Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
  name: 'CreateEmployeeComponent',
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      employeeForm: {
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: '',
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
    handleSubmitForm() {
      this.isSubmitted = true;

      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
    },
  },
};
</script>
