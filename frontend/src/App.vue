<template>
  <div>
    <!--INICIO NAVBAR-->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
      <a class="navbar-brand order-md-last">CRUD Vue.js + PostgreSQL + Node.js + Azure</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to='/'>Create New Employee</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to='/list-employees'>List All Employee</router-link>
        </li>
      </ul>
    </nav>
    <!--FIM NAVBAR-->
    <div class="container mt-5">
        <router-view/>
    </div>
  </div>
</template>
