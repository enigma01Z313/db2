const { Artist } = require("../../../db/MySQL/models");
const updateMetaData = require("./_updateMeta");

module.exports = async (req, res, next) => {
  const { name, stageName, age, ...metaFields } = req.body;

  const defaultOptions = {
    name,
    stageName,
    age,
  };


  const createdArtist = await Artist.create(defaultOptions);
  await updateMetaData(createdArtist.id, metaFields, req.body);

  
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
