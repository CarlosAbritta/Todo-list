const route = require('express').Router();

// controllers
const homeController = require('../controllers/homeController');
const editController = require('../controllers/editController')
const registerController = require('../controllers/registerController')
const loginController = require('../controllers/loginController')


// middlewares
const validateTask = require('../middlewares/validateTask')
const isAuth = require('../middlewares/isAuth')


// rotas que necessitam de autenticação
route.get('/', isAuth,homeController.homePage)
route.post('/',isAuth,validateTask,homeController.addTarefa)

route.post('/delete', isAuth,homeController.deleteTarefa);
route.post('/toggle/:id', isAuth,homeController.toggleTask)

route.get('/update/:id', isAuth,editController.renderEditPage)
route.post('/update/:id', isAuth,editController.updateTarefa)



// rotas publicas
route.get('/register', registerController.renderPage)
route.post('/registrar', registerController.registerUser)

route.get('/login', loginController.renderLogin)
route.post('/login', loginController.loginUser)

module.exports = route;