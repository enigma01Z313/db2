const express = require("express");
const router = express.Router();

const {
  Track: { list, get, create, update, deleteTrack },
} = require("../src/services");

const { getEntityByUuid } = require("../src/middlewares");

const info = {
  model: "Track",
  field: ["uuid"],
};

router.get("/", list);

router.get("/:uuid", getEntityByUuid(info), get);

router.post("/", create);

router.put("/:uuid", update);

router.delete("/:uuid", deleteTrack);

module.exports = router;
