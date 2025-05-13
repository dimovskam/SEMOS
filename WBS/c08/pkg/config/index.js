const fs = require("fs");

const CONFIG_SOURCE = `${__dirname}/../../config.json`;

let config = null;

if (config === null) {
  const file = fs.readFileSync(CONFIG_SOURCE, "utf-8");
  config = JSON.parse(file);

}

const getSection = (section) => {
  // development, staging, live
  if (!config[section]) {
    throw `Configuration section ${section} does not exist!`;
  }

  return config[section];
  //     {
  //       port: 8080,
  //       MONGO_USERNAME: "admin",
  //       MONGO_PASSWORD: "admin",
  //     },
};

module.exports = {
  getSection,
};