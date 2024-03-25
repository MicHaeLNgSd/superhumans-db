const pictureRouter = require('express').Router();
const { PictureController } = require('../controllers');
const imageUploadMWs = require('./../utils/multer/imageUpload');
// const { findPicture } = require('./../middlewares');

const findPicture = async (req, res, next) => {};

pictureRouter.post('/', imageUploadMWs.single('pic'), PictureController.createPicture);
pictureRouter.get('/', PictureController.getPictures);
// pictureRouter.get('/:pictureId', findPicture, PictureController.getPicture);
// pictureRouter.put('/:pictureId', findPicture, PictureController.updatePicture);
// pictureRouter.delete('/:pictureId', findPicture, PictureController.deletePicture);

module.exports = pictureRouter;
