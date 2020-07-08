const express = require("express");
const app = express();

require("./startUp/config")();
require("./startUp/db")();
require("./startUp/prod")(app);
require("./startUp/routes")(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
