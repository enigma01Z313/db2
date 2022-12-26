const express = require("express");
const router = express.Router();

const {
  Position: { list, get, create, update, remove },
} = require("../src/services");

const { getEntityByUuid } = require("../src/middlewares");

const info = {
  model: "Position",
  fields: ["uuid"],
};

router.get("/", list);

router.get("/:uuid", getEntityByUuid(info), get);

router.post("/", create);

router.put("/:uuid", getEntityByUuid(info), update);

router.delete("/:uuid", getEntityByUuid(info), remove);

module.exports = router;
