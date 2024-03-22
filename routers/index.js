const router = require('express').Router();
const superhumanRouter = require('./superhumanRouter');

router.use('/superhumans', superhumanRouter);

module.exports = router;
