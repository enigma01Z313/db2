const { Award } = require("../../../db/MySQL/models");
module.exports = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).end(`ERROR: ${err.message}`);
  }
};
