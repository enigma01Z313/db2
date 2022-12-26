module.exports = async (req, res, next) => {
  try {
    const {
      chainData: { artist, positions },
    } = res;

    const { name, stageName, age, debutDate } = req.body;
    let updateFlag;

    if (name && typeof name !== "string")
      return res.status(404).end(`name should be String`);

    if (stageName && typeof stageName !== "string")
      return res.status(404).end(`stageName should be String`);

    if (age && typeof age !== "number")
      return res.status(404).end(`age should be Number`);

    if (debutDate && typeof debutDate !== "string")
      return res.status(404).end(`debutDate should be String`);

    if (name && name !== artist.name) artist.name = updateFlag = name;

    if (stageName && stageName !== artist.stageName)
      artist.stageName = updateFlag = stageName;

    if (age && age !== artist.age) artist.age = updateFlag = age;

    if (debutDate && debutDate !== artist.debutDate)
      artist.debutDate = updateFlag = debutDate;

    if (typeof updateFlag === undefined) return res.status(204).end();

    if (positions) await artist.setPositions(positions);

    const updatedArtist = await artist.save();

    res.jsonData = updatedArtist;
    next();
  } catch (err) {
    res.jsonData = { error: `ERROR! ${err.message}` };
    res.statusCode = 500;
    next();
  }
};
