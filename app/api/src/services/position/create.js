const { Position } = require("../../../db/MySQL/models");

module.exports = async (req, res) => {
  try {
    const { name } = req.body;
    const defaultOptions = {
      name,
    };
    const position = await Position.create(defaultOptions);
    return res.json(position);
  } catch (err) {
    res.status(500).end(`ERROR: ${err.message}`);
  }
};
