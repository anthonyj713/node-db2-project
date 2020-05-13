const knex = require('knex');

const knexfile = require('../knexfile.js');

const environment = process.env.NODE.ENV || 'development'; //undefined|production

module.exports = knex(knexfile[environment]);