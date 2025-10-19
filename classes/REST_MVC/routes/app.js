import express from 'express';
import indexRoute from './index.js';
import apiRoutes from './apiRoute.js';

const app = express();
const ROUTER = express.Router();

// Rotas 
app.use('/', indexRoute); // Primeira rota
app.use('/rotas', apiRoutes); // Segunda rota
module.exports = app;
