const { getUsers } = require('./controllers/userController');


router.get('/users', getUsers);