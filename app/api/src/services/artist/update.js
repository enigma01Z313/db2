const { ArtistMeta } = require("../../../db/MySQL/models");
const updateMetaData = require("./_updateMeta");

module.exports = async (req, res, next) => {
  try {
    const {
      chainData: { artist, positions },
    } = res;

    const {
      name,
      stageName,
      age,
      debutDate,
      positions: positionIds,
      ...metaFields
    } = req.body;
    let updateFlag;

    if (name && name !== artist.name) artist.name = updateFlag = name;

    if (stageName && stageName !== artist.stageName)
      artist.stageName = updateFlag = stageName;

    if (age && age !== artist.age) artist.age = updateFlag = age;

    if (debutDate && debutDate !== artist.debutDate)
      artist.debutDate = updateFlag = debutDate;

    if (typeof updateFlag === undefined) return res.status(204).end();
    console.log(positionIds);

    if (positions) await artist.setPositions(positions);

    const artistMeta = await updateMetaData(metaFields, req.body);

    const updatedArtist = await artist.save();

    await artist.setArtistMeta(artistMeta);

    res.jsonData = updatedArtist;
    next();
  } catch (err) {
    res.jsonData = { error: `ERROR! ${err.message}` };
    res.statusCode = 500;
    next();
  }
};
