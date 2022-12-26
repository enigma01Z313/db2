"use strict";

module.exports = (sequelize, DataTypes) =>
  sequelize.define("artist", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    stageName: {
      type: DataTypes.STRING,
      field: "stage_name",
    },
    age: {
      type: DataTypes.INTEGER,
    },
    debutDate: {
      type: DataTypes.DATE,
      field: "debut_date",
    },
  });
