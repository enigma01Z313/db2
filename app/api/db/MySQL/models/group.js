"use strict";

module.exports = (sequelize, DataTypes) =>
  sequelize.define("group", {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      field: "start_date",
    },
    endDate: {
      type: DataTypes.DATE,
      field: "end_date",
    },
    fandomName: {
      type: DataTypes.STRING,
      field: "fandom_name",
    },
    albumIds: {
      type: DataTypes.STRING,
      field: "album_ids",
    },
    awards: {
      type: DataTypes.STRING,
    },
    members: {
      type: DataTypes.STRING,
    },
  });
