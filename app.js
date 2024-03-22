const express = require('express');
const router = require('./routers');
const basicErrorHandler = require('./middlewares/errors');

const app = express();

app.use(express.json());
app.use(router);
app.get('*', (req, res, next) => res.send('NOT FOUND'));
app.use(basicErrorHandler);

module.exports = app;
