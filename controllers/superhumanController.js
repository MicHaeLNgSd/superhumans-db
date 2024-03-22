const { Superhuman, Superpower, Picture } = require('../db/models');
const { Op } = require('sequelize');

module.exports.createSuperhuman = async (req, res, next) => {
  try {
    const { body, file: { filename } = {} } = req;

    const superhumanData = {
      ...body,
      path: filename,
    };

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
      include: [
        {
          model: Superpower,
          attributes: ['power', 'power_description'],
        },
        {
          model: Picture,
          attributes: ['path'],
        },
      ],
    });
    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperhuman = async (req, res, next) => {
  try {
    const {
      params: { superhumanId },
    } = req;

    const superhuman = await Superhuman.findByPk(superhumanId, {
      include: [
        {
          model: Superpower,
          attributes: ['power', 'power_description'],
        },
        {
          model: Picture,
          attributes: ['path'],
        },
      ],
    });

    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSuperhuman = async (req, res, next) => {
  try {
    const { body, superhuman, file: { filename } = {} } = req;
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
