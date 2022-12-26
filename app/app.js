"use strict";
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const router = require("./api/router");
const handleError = require("./handleError");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "./public")));

app.use("/api", router);
app.use(handleError);

module.exports = app;
