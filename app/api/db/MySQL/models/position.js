"use strict";

module.exports = (sequelize, DataTypes) =>
  sequelize.define("position", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      // get() {
      //   return this.getDataValue("uuid");
      // },
    },
    uuid: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      // get() {
      //   return undefined;
      // },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
