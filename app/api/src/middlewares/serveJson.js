"use strict";

module.exports = (req, res, next) => {
  const status = res.statusCode ?? 200;
  res.status(status).json(res.jsonData);
};
