const express = require("express");
const bodyParser = require("body-parser");
const conf = require("./config/client");

const setupCacheHandlers = require("./app-cache.js");

const app = express();
app.use(bodyParser.json({type: "application/json"}));

setupCacheHandlers(app, conf.APP_PATH);

const STATIC_PATH = `${__dirname}/static`;

app.get("/", (req, res) => {
  res.sendFile(`${STATIC_PATH}/main.html`);
});

app.listen(conf.PORT, () => {
  console.log(`Client app listening at ${conf.APP_PATH}`);
});
