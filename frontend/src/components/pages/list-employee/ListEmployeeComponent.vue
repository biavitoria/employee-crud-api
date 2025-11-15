<template>
    <div>
      <h3 class="text-center">List All Empoyees</h3>
      <table class="table">
        <thead class="table-light">
          <tr>
            <th class="text-center">Employee Name</th>
            <th class="text-center">Job Role</th>
            <th class="text-center">Salary</th>
            <th class="text-center">Birth</th>
            <th class="text-center">Employee Registration</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee._id">
            <td>{{ employee.name }}</td>
            <td>{{ employee.job_role }}</td>
            <td>{{ employee.salary }}</td>
            <td>{{ employee.birth }}</td>
            <td>{{ employee.employee_registration }}</td>
            <td>
              <router-link
                :to="{ name: 'update', params: { id: employee._id}}"
                class="btn btn-success">
              </router-link>
              <font-awesome-icon :icon="['fas', 'user-edit']"/> Edit
            </td>
            <td>
              <button class="btn btn-danger">
                <font-awesome-icon :icon="['fas', 'trash']"/> Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'ListEmpoyeeConponent',
  data() {
    return {
      employees: [],
    };
  },
};
</script>
