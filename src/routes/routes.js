const route = require('express').Router();
const homeController = require('../controllers/homeController');
const editController = require('../controllers/editController')
const registerController = require('../controllers/registerController')
const validateTask = require('../middlewares/validateTask')

route.get('/', homeController.homePage)

route.post('/',validateTask,homeController.addTarefa)

route.post('/delete', homeController.deleteTarefa);

route.get('/update/:id', editController.renderEditPage)

route.post('/update/:id', editController.updateTarefa)

route.post('/toggle/:id', homeController.toggleTask)

route.get('/register', registerController.renderPage)

route.post('/registrar', registerController.registerUser)

module.exports = route;