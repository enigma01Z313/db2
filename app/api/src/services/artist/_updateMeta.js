const { ArtistMeta } = require("../../../db/MySQL/models");
module.exports = (metaFields, data) =>
  new Promise(async (resolve, reject) => {
    const createArtistMeta = [];
    for (let metaField in metaFields) {
      createArtistMeta.push({
        key: metaField,
        value: data[metaField],
      });
    }

    const createdMeta = await ArtistMeta.bulkCreate(createArtistMeta);

    resolve(createdMeta);
  }).catch((err) => reject(err));
