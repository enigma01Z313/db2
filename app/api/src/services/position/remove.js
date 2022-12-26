const { Position } = require("../../../db/MySQL/models");

module.exports = async (req, res) => {
  try {
    const {
      chainData: { position },
    } = res;

    await Position.destroy({ where: { uuid: position.uuid } });
    return res.end(`position with id ${position.id} deleted`);
  } catch (err) {
    res.status(500).end(`ERROR! ${err.message}`);
  }
};
