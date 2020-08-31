const express = require('express');
const routes = express.Router();
const SessionController = require("./Controllers/SessionController");
const UserController = require("./Controllers/UserController");





routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.destroy);

module.exports = routes

