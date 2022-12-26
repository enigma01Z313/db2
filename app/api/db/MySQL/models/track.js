"use strict";

module.exports = (sequelize, DataTypes) =>
  sequelize.define("track", {
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
    artistId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "artist_id",
    },
    date: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    albumId: {
      type: DataTypes.STRING,
      field: "album_id",
    },
    featIds: {
      type: DataTypes.STRING,
      field: "feat_id",
    },
    isSolo: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: "is_solo",
    },
  });

// module.exports = (sequelize, DataTypes) => {
//   class Track extends Model {
//     static associate({ Artist, Album }) {
//       Track.belongsTo(Artist, { foreignKey: "artistId" }),
//         Track.belongsTo(Artist, { foreignKey: "featIds" }),
//         Track.belongsTo(Album, { foreignKey: "albumId" });
//     }

//     getStatus() {
//       let text;
//       if (this.isSolo === 0) text = "Group(گروه)";
//       else if (this.isSolo === 1) text = "Solo (سولو)";

//       return {
//         text,
//         code: this.isSolo,
//       };
//     }

//     toJSON() {
//       return {
//         ...this.get(),
//         id: this.uuid,
//         artist: this.Artist,
//         album: this.Album,
//         uuid: undefined,
//         Artist: undefined,
//         Album: undefined,
//         artistId: undefined,
//         featIds: undefined,
//         albumId: undefined,
//       };
//     }
//   }
//   Track.init(
//     {
//       uuid: {
//         allowNull: false,
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       artistId: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         field: "artist_id",
//       },
//       date: {
//         type: DataTypes.STRING,
//       },
//       genre: {
//         type: DataTypes.STRING,
//       },
//       albumId: {
//         type: DataTypes.STRING,
//         field: "album_id",
//       },
//       featIds: {
//         type: DataTypes.STRING,
//         field: "feat_id",
//       },
//       isSolo: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0,
//         field: "is_solo",
//       },
//     },
//     {
//       sequelize,
//       tableName: "tracks",
//       modelName: "Track",
//     }
//   );
//   return Track;
// };
