const { Artist, ArtistMeta } = require("../../../db/MySQL/models");
const updateMetaData = require("./_updateMeta");

module.exports = async (req, res, next) => {
  const {
    chainData: { positions },
  } = res;

  const {
    name,
    stageName,
    age,
    debutDate,
    positions: positionIds,
    ...metaFields
  } = req.body;

  const defaultOptions = {
    name,
    stageName,
    debutDate,
    age,
  };
  const createdArtist = await Artist.create(defaultOptions);

  const artistMeta = await updateMetaData(metaFields, req.body);

  createdArtist.addPositions(positions);

  createdArtist.setArtistMeta(artistMeta);

  res.jsonData = createdArtist;
  next();
};

//1
// const propertyNames = Object.getOwnPropertyNames(req.body);

// const artistProperty = Object.getOwnPropertyNames(
//   createdArtist.rawAttributes
// );
// for (let propertyName of propertyNames) {
//   if (!artistProperty.includes(propertyName)) metaFields.push(propertyName);
// }

// for (let metaField of metaFields) {
//   createArtistMeta.push({
//     key: metaField,
//     value: req.body[metaField],
//     artistId: createdArtist.id,
//   });
// }
