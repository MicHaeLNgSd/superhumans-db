const { Superhuman, Superpower } = require('../db/models');
const { Op } = require('sequelize');

module.exports.createSuperpower = async (req, res, next) => {
  try {
    const { body, superhuman } = req;
    const superpower = await superhuman.createSuperpower(body);

    res.status(201).send({ data: superpower });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperpowers = async (req, res, next) => {
  try {
    const { superhuman } = req;
    const superpowers = await superhuman.getSuperpowers();
    res.status(200).send({ data: superpowers });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperpower = async (req, res, next) => {
  try {
    const { superpower } = req;
    res.status(200).send({ data: superpower });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSuperpower = async (req, res, next) => {
  try {
    const { body, superpower } = req;
    const updatedSuperpower = await superpower.update(body, { returning: true });
    res.status(200).send({ data: updatedSuperpower });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperpower = async (req, res, next) => {
  try {
    const { superpower: deletedSuperpower } = req;
    await deletedSuperpower.destroy();
    res.status(200).send({ data: deletedSuperpower });
  } catch (error) {
    next(error);
  }
};
