const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Project = sequelize.define("Project", {

 name: {
  type: DataTypes.STRING,
  allowNull: false
 },

 description: {
  type: DataTypes.TEXT
 },

 start_date: {
  type: DataTypes.DATE
 },

 end_date: {
  type: DataTypes.DATE
 },

 status: {
  type: DataTypes.ENUM("planned","active","completed"),
  defaultValue: "planned"
 },

 created_by: {
  type: DataTypes.INTEGER
 }

});

module.exports = Project;