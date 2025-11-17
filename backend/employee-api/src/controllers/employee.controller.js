/**
 * arquivo: controllers/employee.controller.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Employee)
 * data: 14/11/2025
 * author: Beatriz Brandão <beatrizvsbrandao@gmail.com>
 */

const db = require('../config/database');

// ==> Método responsável por criar um novo 'Employee'
exports.createEmployee = async(req, res) => {
    const { name, job_role, salary, birth, employee_registration } = req.body;
    const { rows } = await db.query(
        "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
        [name, job_role, salary, birth, employee_registration]
    );

    res.status(201).send({
        message: 'Employee added successfully',
        body: {
            employee: { name, job_role, salary, birth, employee_registration }
        },
    });
};

// ==> Método responsável por listar todos os 'Employees'
exports.listAllEmployees = async(req, res) => {
    const response = await db.query(`SELECT 
                                        employee_id, 
                                        name, job_role, 
                                        salary, 
                                        employee_registration, 
                                        to_char(birth, 'yyyy-MM-dd') as birth 
                                    FROM  employee ORDER BY name ASC`);
    res.status(200).send(response.rows);
}

// ==> Método responsável por listar um determinado 'Employee' por Id
exports.findEmployeeById = async(req, res) => {
    const { id } = req.params;
    const { rows } = await db.query(`SELECT 
                                        employee_id, 
                                        name, 
                                        job_role, 
                                        salary, 
                                        employee_registration, 
                                        to_char(birth, 'yyyy-MM-dd') as birth 
                                    FROM employee WHERE employee_id = $1`, [id]);
    if (!rows.length) {
        throw 'employee_not_found';
        
    }
    res.status(200).send(rows[0]);
}

// ==> Método responsável por atualizar um determinado 'Employee' por Id
exports.updateEmployeeById = async(req, res) => {
    const employeeId = req.params.id;
    const { name, job_role, salary, birth, employee_registration } = req.body;

    const response = await db.query('UPDATE employee SET name = $1, job_role = $2, salary = $3, birth = $4, employee_registration = $5 WHERE employee_id = $6', 
        [name, job_role, salary, birth, employee_registration, employeeId]
    );

    res.status(200).send({ message: 'Employee Updated Successfully' });
}

// ==> Método responsável por deletar um determinado 'Employee' por Id
exports.deleteEmployeeById = async(req, res) => {
    const employeeId = req.params.id;
    await db.query('DELETE FROM employee WHERE employee_id = $1', [employeeId]);
    res.status(200).send({ message: 'Employee deleted successfully!' });
}
