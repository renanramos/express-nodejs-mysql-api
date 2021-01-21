const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const { handleError } = require('./helpers/error');

const indexRouter = require('./routes/index');
const quotesRouter = require('./routes/quotes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/quotes', quotesRouter);
app.use((err, req, res, next) => handleError(err, res));

module.exports = app;
