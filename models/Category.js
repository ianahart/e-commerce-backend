// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config
const sequelize = require('../config/connection.js');

// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model {}

// set up fields and rules for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
