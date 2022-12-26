const express = require("express");
const router = express.Router();

const {
  Award: { list, get, create, update, deleteAward },
} = require("../src/services");

const { getEntityByUuid } = require("../src/middlewares");

const info = {
  model: "Award",
  field: ["uuid"],
};

router.get("/", list);

router.get("/:uuid", getEntityByUuid(info), get);

router.post("/", create);

router.put("/:uuid", update);

router.delete("/:uuid", deleteAward);

module.exports = router;
