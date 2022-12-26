const { Position } = require("../../../db/MySQL/models");

module.exports = async (req, res) => {
  try {
    const position = await Position.findAll();
    return res.json(position);
  } catch (err) {
    res.status(500).end(`ERROR! ${err.message}`);
  }
};
