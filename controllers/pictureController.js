const { Superhuman, Picture } = require('../db/models');
const { Op } = require('sequelize');

module.exports.createPicture = async (req, res, next) => {
  try {
    const {
      body,
      superhuman,
      file: { filename },
    } = req;
    const picture = await superhuman.createPicture({ path: filename });
    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.getPictures = async (req, res, next) => {
  try {
    const { superhuman } = req;
    // const pictures = await Picture.findAll({
    //   include: [{ model: Superhuman, attributes: id, where }],
    // });
    const pictures = await superhuman.getPictures({
      attributes: ['path'],
      joinTableAttributes: [],
    });
    res.send({ data: pictures });
  } catch (error) {
    next(error);
  }
};

// module.exports.getPicture = async (req, res, next) => {
//   try {
//     const { superpower } = req;
//     res.status(200).send({ data: superpower });
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports.updatePicture = async (req, res, next) => {
//   try {
//     const { body, superpower } = req;
//     const updatedSuperpower = await superpower.update(body, { returning: true });
//     res.status(200).send({ data: updatedSuperpower });
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports.deletePicture = async (req, res, next) => {
//   try {
//     const { superpower: deletedSuperpower } = req;
//     await deletedSuperpower.destroy();
//     res.status(200).send({ data: deletedSuperpower });
//   } catch (error) {
//     next(error);
//   }
// };
