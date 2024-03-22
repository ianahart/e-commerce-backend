// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// Initialize Tag model (table) by extending off Sequelize's Model class
const sequelize = require('../config/connection.js');

// set up fields and rules for Tag model
class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
