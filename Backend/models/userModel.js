const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
});

module.exports = User