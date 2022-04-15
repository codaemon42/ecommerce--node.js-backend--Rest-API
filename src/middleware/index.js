const morgan = require('morgan');
const { logger } = require('../config');
const express = require('express');

module.exports = {
	middleware: (app) =>{
		app.use(morgan('combined', { stream: logger.stream}));
		app.use(express.json());
	}
}