"use strict";

module.exports = (sequelize, DataTypes) =>
  sequelize.define("album", {
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
      // get() {
      //   return undefined;
      // },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
    },
    length: {
      type: DataTypes.STRING,
    },
    tracksList: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "tracks_list",
    },
    artistId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "artist_id",
    },
  });

// const { Model } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
//   class Album extends Model {
//     static associate({ Track, Artist }) {
//       Album.belongsTo(Track, { foreignKey: "tracksList" }),
//         Album.belongsTo(Artist, { foreignKey: "artistId" });
//     }

//     toJSON() {
//       return {
//         ...this.get(),
//         id: this.uuid,
//         track: this.Track,
//         artist: this.Artist,
//         uuid: undefined,
//         Track: undefined,
//         Artist: undefined,
//         tracksList: undefined,
//         artistId: undefined,
//       };
