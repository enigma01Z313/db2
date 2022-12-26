"use strict";

module.exports = (sequelize, DataTypes) =>
  sequelize.define("award", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      get() {
        return this.getDataValue("uuid");
      },
    },
    uuid: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      get() {
        return undefined;
      },
    },
    festivalName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "festival_name",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
