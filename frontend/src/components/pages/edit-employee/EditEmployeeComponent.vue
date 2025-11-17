<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3 class="text-center">Update Employee</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="UpdateFormEmployee()">

            <!-- INICIO DO BLOCO: Employee Name -->
             <div class="mb-3">
              <label class="fw-bold">Employee Name</label>
              <input
                type="text"
                id="name"
                name="name"
                class="form-control"
                v-model="employeeForm.name"
              >
             </div>
            <!-- FIM DO BLOCO: Employee Name -->

            <!-- INICIO DO BLOCO: Job Role -->
             <div class="mb-3">
              <label class="fw-bold">Job Role</label>
              <input
                type="text"
                id="job_role"
                name="job_role"
                class="form-control"
                v-model="employeeForm.job_role"
              >
             </div>
            <!-- FIM DO BLOCO: Job Role -->

            <!-- INICIO DO BLOCO: Salary -->
             <div class="mb-3">
              <label class="fw-bold">Salary</label>
              <input
                type="text"
                id="salary"
                name="salary"
                class="form-control"
                v-model="employeeForm.salary"
              >
             </div>
            <!-- FIM DO BLOCO: Salary -->

            <!-- INICIO DO BLOCO: Birth -->
             <div class="mb-3">
              <label class="fw-bold">Birth</label>
              <input
                type="date"
                id="birth"
                name="birth"
                class="form-control"
                v-model="employeeForm.birth"
              >
             </div>
            <!-- FIM DO BLOCO: Birth -->

            <!-- INICIO DO BLOCO: Employee Registration -->
             <div class="mb-3">
              <label class="fw-bold">Employee Registration</label>
              <input
                type="text"
                id="employee_registration"
                name="employee_registration"
                class="form-control"
                v-model="employeeForm.employee_registration"
              >
             </div>
            <!-- FIM DO BLOCO: Employee Registration -->

            <div class="mb-3">
              <button
                @click="submit"
                class="btn btn-primary">
                <font-awesome-icon :icon="['fas', 'user-edit']"/> Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script src="./EditEmployee.js"></script>

<style src="" scoped></style>
