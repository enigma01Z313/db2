const express = require("express");
const router = express.Router();

const {
  getEntityByUuid,
  getEntitiesByUuid,
  serveJson,
  use,
  validate: { ValidateF, validator },
} = require("../src/middlewares");

const deepLog = require("../src/utils/deepLog");

/***********************/
/***** Validations *****/
/***********************/
const artistCreateSchema = new ValidateF()
  .param("name", "نام")
  .requiredString()
  .param("age")
  .requiredNumber()
  .param("stageName")
  .requiredString()
  .param("debutDate")
  .string()
  .param("positions")
  .requiredArray("string")
  .done();

const artistUpdateSchema = new ValidateF()
  .param("name", "نام")
  .string()
  .param("age")
  .number()
  .param("stageName")
  .string()
  .param("debutDate")
  .string()
  .param("positions")
  .array("string")
  .done();

/***********************/
/***** Services ********/
/***********************/
const {
  Artist: { list, get, create, update, remove },
} = require("../src/services");

/***********************/
/*****  Routes  ********/
/***********************/
const info = {
  model: "Artist",
  fields: ["uuid"],
};

const info2 = {
  model: "Position",
  field: "positions",
  chainKey: "positions",
};

router.get("/", list, serveJson);

router.get("/:uuid", get, serveJson);

router.post(
  "/",
  use(validator(artistCreateSchema)),
  getEntitiesByUuid(info2),
  use(create),
  serveJson
);

router.put(
  "/:uuid",
  use(validator(artistUpdateSchema)),
  getEntityByUuid(info),
  getEntitiesByUuid(info2),
  use(update),
  serveJson
);

router.delete("/:uuid", getEntityByUuid(info), use(remove));

module.exports = router;
