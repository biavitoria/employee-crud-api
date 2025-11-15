/**
 * file: src/services/Api.js
 * data: 15/11/2025
 * description: arquivo responsável por inicializar o 'axios'
 * e as requisições da url base dos HTTP's (GET, POST, PUT, DELETE)
 * author: Beatriz Vitória <beatrizvsbrandao@gmail.com>
 */

import axios from 'axios';

export default () => axios.create({
  // 'baseURL' do Back-End -> vai fazer a comunicação do Front com o Back
  baseURL: 'http://localhost:3000/api',
});
