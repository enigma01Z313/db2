const { Group } = require("../../../db/MySQL/models");
module.exports = async (req, res) => {
  try {
    const group = await Group.findAll();
    return res.json(group);
  } catch (err) {
    res.status(500).end(`ERROR! ${err.message}`);
  }
};
