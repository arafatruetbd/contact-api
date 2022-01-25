'use strict';

const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(
  config.db.dbName,
  config.db.user,
  config.db.password,
  {
    dialect: 'postgres',
    host: config.db.host,
    define: {
      underscored: true,
    },
    pool: {
      max: 30,
      idle: 20000,
      acquire: 100000
    },
    logging: config.db.logging,
    timezone: '+06:00'
  }
);

sequelize.authenticate()
    .then(function(err) {
        console.log('Database connection has been established successfully.');
    })
    .catch(function (err) {
        console.log(err);
        console.log('Unable to connect to the database', err);
});



module.exports = sequelize;


