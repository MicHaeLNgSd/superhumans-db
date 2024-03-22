const router = require('express').Router();
const superhumanRoute = require('./superhumanRouter');

router.use('/superhumans', superhumanRoute);

module.exports = router;
