const {Router} = require('express');
const router = Router();
const usersController = require('./controllers/usersController');
const handlerController = require('./controllers/handlerController');


// This is the route for the validation of connexion
router.get('/login', handlerController(usersController.findUserByPseudoOrEmail));

/* This is the route for create new Account */
router.post('/sign-up', handlerController(usersController.createUser));



/* This is the route for Find user By Id */
router.get('/user/:id',handlerController(usersController.getUserById));









module.exports = router;