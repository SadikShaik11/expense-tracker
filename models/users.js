const { uniqueId } = require('lodash');
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Userdetails = sequelize.define('details', {

    email: {
        type: Sequelize.STRING,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Userdetails;