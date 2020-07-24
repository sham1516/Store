const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sham!1516', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;