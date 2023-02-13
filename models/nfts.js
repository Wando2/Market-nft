const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const User = require('./users')


const Nft = db.define('Nft', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    url:{
        type: DataTypes.STRING,
        allowNull: false
    }

   
})

Nft.belongsTo(User)
User.hasMany(Nft)

module.exports = Nft