const Sequelize = require('sequelize');

    const sequelize = new Sequelize('nodecomplete', 'root', 'kapil',{host:'localhost',dialect:'mysql'});// connection

module.exports = sequelize;