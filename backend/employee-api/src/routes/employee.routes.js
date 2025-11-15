/**
 * arquivo: routes/employee.routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 14/11/2025
 * author: Beatriz Brandão <beatrizvsbrandao@gmail.com>
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// ==> Definindo as rotas do CRUD - 'Employee'

// ==> Rota responsável por criar um novo 'Funcionário(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

// ==> Rota responsável por listar todos o 'Funcionários: (GET): localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees);

// ==> Rota responsável por listar um determinado'Funcionário' por Id: (GET): localhost:3000/api/employees/:id
router.get('/employees/:id', employeeController.findEmployeeById);

// ==> Rota responsável por atualizar informações de um determinado 'Funcionário' por Id: (PUT): localhost:3000/api/employees/:id
router.put('/employees/:id', employeeController.updateEmployeeById);

module.exports = router;