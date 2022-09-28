const {Router} = require('express');
const router = Router();
const usersController = require('./controllers/usersController');
const handlerController = require('./controllers/handlerController');
const questionsController = require('./controllers/questionController');


// This is the route for the validation of connexion
router.post('/login', handlerController(usersController.findUserByPseudoOrEmail));

/* This is the route for create new Account */
router.post('/sign-up', handlerController(usersController.createUser));

/* This is the route for Find user By Id */
router.get('/user/:id',handlerController(usersController.getUserById));

router.get('/question/:id/answers', handlerController(questionsController.getQuestionById));

router.get('/questions', handlerController(questionsController.getAllQuestions));

router.post('/questions', handlerController(questionsController.createQuestion));
r







module.exports = router;