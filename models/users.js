
const db = require('../db/conn')
const {DataTypes} = require('sequelize')

const User = db.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
    email: {
        type: DataTypes.STRING,
        
    },
    password: {
        type: DataTypes.STRING,
        
    }
    
}) 

module.exports = User