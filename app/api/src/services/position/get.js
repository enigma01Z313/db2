module.exports = async (req, res) => {
  try {
    const {
      chainData: { position },
    } = res;

    console.log(res.chainData);
    return res.json(position);
  } catch (err) {
    res.status(500).end(`ERROR! ${err.message}`);
  }
};
