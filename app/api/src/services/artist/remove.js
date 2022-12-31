const { Artist } = require("../../../db/MySQL/models");
const updateMetaData = require("./_updateMeta");

module.exports = async (req, res) => {
  try {
    const {
      chainData: { artist },
    } = res;

    await Artist.destroy({ where: { uuid: artist.uuid } });
    return res.json({ message: `artist with id ${artist.uuid} deleted` });
  } catch (err) {
    res.status(500).json({ error: `ERROR! ${err.message}` });
  }
};
