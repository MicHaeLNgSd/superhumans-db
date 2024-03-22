const { Superhuman, Superpower } = require('../db/models');
const { Op } = require('sequelize');

module.exports.createSuperhuman = async (req, res, next) => {
  try {
    const { body } = req;
    const superhuman = await Superhuman.create(body);

    res.status(201).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperhumans = async (req, res, next) => {
  try {
    // const { pagination } = req;
    // const superhuman = await Superhuman.findAll({
    //   ...pagination,
    // });
    const superhuman = await Superhuman.findAll({
      // include: [
      //   {
      //     model: Superpower,
      //     required: true,
      //     attributes: ['power', 'power_description'],
      //   },
      // ],
    });
    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperhuman = async (req, res, next) => {
  try {
    const { superhuman } = req;
    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSuperhuman = async (req, res, next) => {
  try {
    const { body, superhuman } = req;
    const updatedSuperhuman = await superhuman.update(body, {
      returning: true,
    });
    res.status(200).send({ data: updatedSuperhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperhuman = async (req, res, next) => {
  try {
    const { superhuman: deletedSuperhuman } = req;
    await deletedSuperhuman.destroy();
    res.status(200).send({ data: deletedSuperhuman });
  } catch (error) {
    next(error);
  }
};
