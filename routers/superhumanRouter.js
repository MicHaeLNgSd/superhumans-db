const superhumansRouter = require('express').Router();
const superpowerRouter = require('./superpowerRouter');
const { SuperhumanController } = require('../controllers');
const { findSuperhuman } = require('./../middlewares');
const imageUploadMWs = require('./../utils/multer/imageUpload');

superhumansRouter.post(
  '/',
  imageUploadMWs.single('pic'),
  SuperhumanController.createSuperhuman
);
superhumansRouter.get('/', SuperhumanController.getSuperhumans);
superhumansRouter.get('/:superhumanId', SuperhumanController.getSuperhuman);
superhumansRouter.put(
  '/:superhumanId',
  imageUploadMWs.single('pic'),
  findSuperhuman,
  SuperhumanController.updateSuperhuman
);
superhumansRouter.delete(
  '/:superhumanId',
  findSuperhuman,
  SuperhumanController.deleteSuperhuman
);

superhumansRouter.use('/:superhumanId/superpowers', findSuperhuman, superpowerRouter);

module.exports = superhumansRouter;
