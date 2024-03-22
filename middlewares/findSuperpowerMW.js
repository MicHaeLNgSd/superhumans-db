const createError = require('http-errors');
const { Superhuman, Superpower } = require('./../db/models');

module.exports = async (req, res, next) => {
  try {
    const {
      params: { superpowerId },
      superhuman,
    } = req;

    const superpower = await Superpower.findOne({
      where: {
        id: superpowerId,
        ownerId: superhuman.id,
      },
    });

    if (!superpower) {
      throw createError(404, 'Superpower was not found');
    }
    req.superpower = superpower;
    next();
  } catch (error) {
    next(error);
  }
};
