/**
 * arquivo: controllers/employee.controller.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Employee)
 * data: 14/11/2025
 * author: Beatriz Brandão <beatrizvsbrandao@gmail.com>
 */

const db = require('../config/database');

// ==> Método responsável por criar um novo 'Employee'
exports.createEmployee = async(req, res) => {
    try {
        const { name, job_role, salary, birth, employee_registration } = req.body;

    // Validação simples
    if (!name || !job_role || !salary || !birth || !employee_registration) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields.'
        });
    }

    const { rows } = await db.query(
        "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [name, job_role, salary, birth, employee_registration]
    );

    return res.status(201).json({
            success: true,
            message: 'Employee created successfully.',
            employee: rows[0]
        });
    } catch (error) {
        console.error('Erro em createEmployee:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
    }
};

// ==> Método responsável por listar todos os 'Employees'
exports.listAllEmployees = async(req, res) => {
    try {
        const response = await db.query(`SELECT 
                                            employee_id, 
                                            name, job_role, 
                                            salary, 
                                            employee_registration, 
                                            to_char(birth, 'yyyy-MM-dd') as birth 
                                        FROM  employee ORDER BY name ASC`);
        res.status(200).send(response.rows);
    } catch (error) {
        console.error('Erro em listAllEmployees:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
    }
};

// ==> Método responsável por listar um determinado 'Employee' por Id
exports.findEmployeeById = async(req, res) => {
    try {
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
            return res.status(404).json({
                success: false,
                message: 'Employee not found.'
            });
        }
        return res.status(200).json({
            success: true,
            employee: rows[0]
        });
    } catch (error) {
        console.error('Erro em findEmployeeById:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
    }
};

// ==> Método responsável por atualizar um determinado 'Employee' por Id
exports.updateEmployeeById = async(req, res) => {
    try {
        const employeeId = req.params.id;
        const { name, job_role, salary, birth, employee_registration } = req.body;

        if (!name || !job_role || !salary || !birth || !employee_registration) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields.'
            });
        }

        const response = await db.query('UPDATE employee SET name = $1, job_role = $2, salary = $3, birth = $4, employee_registration = $5 WHERE employee_id = $6', 
        [name, job_role, salary, birth, employee_registration, employeeId]
    );

        return res.status(200).json({
            success: true,
            message: 'Employee updated successfully.',
            employee: rows[0]
        });
    } catch (error) {
        console.error('Erro em updateEmployeeById:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
    }
};

// ==> Método responsável por deletar um determinado 'Employee' por Id
exports.deleteEmployeeById = async(req, res) => {
    try {
        const { id } = req.params;

        const query = `
            DELETE FROM employee
            WHERE employee_id = $1
            RETURNING employee_id
        `;

        const { rowCount } = await db.query(query, [id]);

        if (rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Employee not found.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Employee deleted successfully.'
        });

    } catch (error) {
        console.error('Erro em deleteEmployeeById:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
    }
};