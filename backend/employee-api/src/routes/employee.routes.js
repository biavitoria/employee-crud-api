/**
 * arquivo: routes/employee.routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 14/11/2025
 * author: Beatriz Brandão <beatrizvsbrandao@gmail.com>
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// ==> Definindo as rotas do CRUD - 'Employee'

// Rota responsável por criar um novo 'Funcionário(a)': (POST): localhost:300/api/employees
router.post('/employees', employeeController.createEmployee);

module.exports = router;