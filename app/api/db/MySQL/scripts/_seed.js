"use strict";

const { v4: uuidv4 } = require("uuid");
const { Position, Artist, ArtistMeta } = require("../models");

(async function () {
  // Positions
  const position1 = await Position.create({
    uuid: uuidv4(),
    name: "Vocal",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const position2 = await Position.create({
    uuid: uuidv4(),
    name: "Visual",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const position3 = await Position.create({
    uuid: uuidv4(),
    name: "Center",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log("Position seed has been finished");

  ///Artists
  const artist1 = await Artist.create({
    uuid: uuidv4(),
    name: "Kim Taehyung",
    stageName: "V",
    debutDate: "12-30-1995",
    age: 26,
  });

  const artist2 = await Artist.create({
    uuid: uuidv4(),
    name: "Park Jimin",
    stageName: "Jimin",
    debutDate: "03-15-1995",
    age: 26,
  });

  const artist3 = await Artist.create({
    uuid: uuidv4(),
    name: "Kim Seokjin",
    stageName: "Jin",
    debutDate: "12-14-1991",
    age: 31,
  });
  console.log("Artist seed has been finished");

  //artist_position
  await artist1.addPositions([position1, position2]);
  await artist2.addPosition(position3);
  await artist3.addPosition(position1);

  console.log("Artists Positions seed has been finished");

  //remove position
  // await artist3.removePosition(position1);
  // console.log("Artists Positions removed");

  //artistMeta
  const artistMeta1 = await ArtistMeta.create({
    uuid: uuidv4(),
    key: "email",
    value: "yhgfa@bt21.com",
  });

  const artistMeta2 = await ArtistMeta.create({
    uuid: uuidv4(),
    key: "phone",
    value: "09903696246",
  });

  await artist1.addArtistMeta(artistMeta1);

  await artist1.addArtistMeta(artistMeta2);

  console.log("ArtistMeta seed has been finished");

  process.exit();
})();
