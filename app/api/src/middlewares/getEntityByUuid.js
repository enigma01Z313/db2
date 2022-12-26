const util = require("util");
const { Op } = require("sequelize");
const Models = require("../../db/MySQL/models");
module.exports = (info) => {
  return async (req, res, next) => {
    try {
      const model = info.model;
      const includes = info.includes;
      const fields = info.fields;

      const whichField = fields.map((field) => ({
        uuid: [req.params[field] ?? req.body[field]],
      }));

      const whereOptions = {
        where: {
          [Op.or]: whichField,
        },
        include: includes,
      };

      const item = await Models[model].findOne(whereOptions);

      if (!item) {
        const error = new Error(`this id is not found`);
        error.status = 404;
        throw error;
      }

      const name = model[0].toLowerCase() + model.substring(1);

      console.log("==========", name);
      res.chainData[name] = item;

      next();
    } catch (err) {
      const status = err.status ?? 500;
      return res.status(status).end(`ERROR: ${err.message}`);
    }
  };
};
