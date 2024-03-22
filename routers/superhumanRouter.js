const superhumansRoute = require('express').Router();
const { SuperhumanController } = require('../controllers');
const { findSuperhuman } = require('./../middlewares');
// superhumansRoute.get('/', (req, res, next) => {
//   res.send();
//   res.next();
// });

superhumansRoute.post('/', SuperhumanController.createSuperhuman);
superhumansRoute.get('/', SuperhumanController.getSuperhumans);
superhumansRoute.get(
  '/:superhumanId',
  findSuperhuman,
  SuperhumanController.getSuperhuman
);
superhumansRoute.put(
  '/:superhumanId',
  findSuperhuman,
  SuperhumanController.updateSuperhuman
);
superhumansRoute.delete(
  '/:superhumanId',
  findSuperhuman,
  SuperhumanController.deleteSuperhuman
);

module.exports = superhumansRoute;
