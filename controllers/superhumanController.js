const { Superhuman } = require('../models');
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
    const superhuman = await Superhuman.findAll();
    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperhuman = async (req, res, next) => {
  try {
    const superhuman = await Superhuman.findAll();
    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};
