const createError = require('http-errors');
const { Superhuman } = require('./../db/models');

module.exports = async (req, res, next) => {
  try {
    const {
      params: { superhumanId },
    } = req;

    const superhuman = await Superhuman.findByPk(superhumanId);
    if (!superhuman) {
      throw createError(404, 'Superhuman was not found');
    }
    req.superhuman = superhuman;
    next();
  } catch (error) {
    next(error);
  }
};
