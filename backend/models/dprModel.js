const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const DPR = sequelize.define("DailyReport", {

  project_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false
  },

  work_description: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  weather: {
    type: DataTypes.STRING
  },

  worker_count: {
    type: DataTypes.INTEGER
  }

}, {
  tableName: "daily_reports",
  timestamps: false
});

module.exports = DPR;