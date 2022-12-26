const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const services = {};

const capitaliseWord = (txt) => txt[0].toUpperCase() + txt.substring(1);

fs.readdirSync(__dirname)
  .filter((file) => {
    return file !== basename;
  })
  .forEach((directory) => {
    const dirName = capitaliseWord(directory);
    const dirServices = {};
    const serviceDirectory = path.join(__dirname, directory);

    fs.readdirSync(serviceDirectory)
      .filter((file) => file[0] !== "_")
      .forEach((file) => {
        if (file.includes(".js")) {
          const service = require(path.join(serviceDirectory, file));
          dirServices[file.slice(0, -3)] = service;
          services[dirName] = dirServices;
        } else {
          const subServicePath = path.resolve(serviceDirectory, file);
          const subService = {};

          fs.readdirSync(subServicePath)
            .filter((file) => file[0] !== "_")
            .forEach((subFile) => {
              const service = require(path.join(subServicePath, subFile));
              subService[subFile.slice(0, -3)] = service;
              services[dirName][capitaliseWord(file)] = subService;
            });
        }
      });
  });

module.exports = services;
