const { Artist } = require("../../../db/MySQL/models");
module.exports = async (req, res, next) => {
  try {
    const artist = await Artist.findAll();
    // return res.json(artist);
    res.jsonData = artist;
    next();
  } catch (err) {
    // res.status(500).end(`ERROR! ${err.message}`);
    res.jsonData = { error: `ERROR! ${err.message}` };
    res.statusCode = 500;
    next();
  }
};
