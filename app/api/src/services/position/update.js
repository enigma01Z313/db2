module.exports = async (req, res) => {
  try {
    const {
      chainData: { position },
    } = res;

    const { name } = req.body;
    let updateFlag;

    if (name && typeof name !== "string")
      return res.status(404).end(`name should be String`);

    if (name && name !== position.name) position.name = updateFlag = name;

    if (typeof updateFlag === undefined) return res.status(204).end();

    const updatedPosition = await position.save();

    return res.json(updatedPosition);
  } catch (err) {
    res.status(500).end(`ERROR! ${err.message}`);
  }
};
