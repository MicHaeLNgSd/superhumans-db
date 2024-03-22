const superpowerRouter = require('express').Router();
const { SuperpowerController } = require('../controllers');
// const { findSuperpower } = require('./../middlewares');

superpowerRouter.post('/', SuperpowerController.createSuperpower);
superpowerRouter.get('/', SuperpowerController.getSuperpowers);
// superpowerRouter.get('/:superpowerId', findSuperpower, SuperpowerController.getSuperpower);
// superpowerRouter.put(
//   '/:superpowerId',
//   findSuperpower,
//   SuperpowerController.updateSuperpower
// );
// superpowerRouter.delete(
//   '/:superpowerId',
//   findSuperpower,
//   SuperpowerController.deleteSuperpower
// );

module.exports = superpowerRouter;
