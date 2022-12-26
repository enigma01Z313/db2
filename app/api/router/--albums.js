const express = require("express");
const router = express.Router();

const {
  Album: { list, get, create, update, deleteAlbum },
} = require("../src/services");

const {
  getEntityByUuid,
  getEntitiesByUuid,
  serveJson,
} = require("../src/middlewares");

const info = {
  model: "Album",
  field: ["uuid"],
};

router.get("/", list);

router.get("/:uuid", getEntityByUuid(info), get);

router.post("/", create);

router.put("/:uuid", update);

router.delete("/:uuid", deleteAlbum);

module.exports = router;
