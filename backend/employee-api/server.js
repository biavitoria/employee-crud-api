/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execução do Back-End ('Employee')
 * data14/11/2025
 * author: Beatriz Brandão <beatrizvsbrandao@gmail.com>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação sendo executada na porta:', port);
});