const superhumansRoute = require('express').Router();
const { superhumanController } = require('../controllers');

// superhumansRoute.get('/', (req, res, next) => {
//   res.send();
//   res.next();
// });

superhumansRoute.post('/', superhumanController.createSuperhuman);
superhumansRoute.get('/', superhumanController.getSuperhumans);
// superhumansRoute.get('/:userId', findUser, UserController.getUser);
// superhumansRoute.put('/:userId', findUser, UserController.updateUser);
// superhumansRoute.delete('/:userId', findUser, UserController.deleteUser);

module.exports = superhumansRoute;
