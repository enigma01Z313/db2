const express = require("express");
const router = express.Router();

const {
  Group: { list, get, create, update, deleteGroup },
} = require("../src/services");

const { getEntityByUuid } = require("../src/middlewares");

const info = {
  model: "Group",
  field: ["uuid"],
};

router.get("/", list);

router.get("/:uuid", getEntityByUuid(info), get);

router.post("/", create);

router.put("/:uuid", update);

router.delete("/:uuid", deleteGroup);

module.exports = router;
