module.exports = (db) => {
  const { Position, Artist, ArtistMeta } = db;

  Artist.belongsToMany(Position, {
    through: "artist_position",
    as: "positions",
    foreignKey: "artist_id",
  });

  Position.belongsToMany(Artist, {
    through: "artist_position",
    as: "artists",
    foreignKey: "position_id",
  });

  Artist.hasMany(ArtistMeta, { foreignKey: "artistId" });

  ArtistMeta.belongsTo(Artist, { foreignKey: "artistId" });

  return db;
};
