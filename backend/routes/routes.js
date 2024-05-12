const { getUsers } = require('../controllers/userControllers');


router.get('/users', getUsers);

