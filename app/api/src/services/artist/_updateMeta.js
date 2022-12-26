const { ArtistMeta } = require("../../../db/MySQL/models");

module.exports = (artistId, metaFields, data) =>
  new Promise(async (resolve, reject) => {
    const createArtistMeta = [];
    for (let metaField in metaFields) {
      createArtistMeta.push({
        key: metaField,
        value: data[metaField],
        artistId,
      });
    }

    await ArtistMeta.bulkCreate(createArtistMeta);

    resolve();
  }).catch((err) => reject(err));
