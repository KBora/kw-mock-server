const scenario = process.argv.slice(2).pop() || "default";
const express = require("express");
const bodyParser = require("body-parser");
const appRouter = require("./mock.routes");
var cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./mock.routes")(app, scenario);
const server = app.listen(4400, () => {
  console.log(
    "[mock] mock server listening on port %s...",
    server.address().port
  );
});
