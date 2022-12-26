const express = require("express");
const router = express.Router();

// const albumsRouter = require("./albums");
// const awardsRouter = require("./awards");
// const tracksRouter = require("./tracks");
const artistsRouter = require("./artists");
const positionsRouter = require("./positions");

router.use((req, res, next) => {
  res.chainData = {};
  next();
});

router.use("/artists", artistsRouter);
router.use("/positions", positionsRouter);
// router.use("/albums", albumsRouter);
// router.use("/awards", awardsRouter);
// router.use("/tracks", tracksRouter);

module.exports = router;
