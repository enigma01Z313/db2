const util = require("util");

module.exports = (data) => {
  console.log(
    util.inspect(data, { showHidden: false, depth: null, colors: true })
  );
};
