const { col } = require("sequelize");
const { Artist, Position, ArtistMeta } = require("../../../db/MySQL/models");

module.exports = async (req, res, next) => {
  try {
    const { uuid } = req.params;

    const artist = await Artist.findOne({
      where: { uuid },
      include: [
        { model: Position, as: "positions", through: { attributes: [] } },
        { model: ArtistMeta },
      ],
    });

    res.jsonData = artist;
    next();
  } catch (err) {
    res.jsonData = { error: `ERROR! ${err.message}` };
    res.statusCode = 500;
    next();
  }
};
