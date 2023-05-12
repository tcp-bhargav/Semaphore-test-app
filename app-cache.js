const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const widgetConfig = require("./config/widget.js");
const studioConfig = require("./config/studio.local.js");

const UPLOAD_DIR = "uploads";

const corsOptions = {
  origin: new URL(widgetConfig.WIDGET_APP_URL).origin,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const forms = [];

const resultsStore = {};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${UPLOAD_DIR}/`);
  },
  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

function setupCacheHandlers(app, APP_PATH) {
  app.use(cors(corsOptions));
  app.use(express.static(UPLOAD_DIR));
  app.use(express.static("static"));

  app.get("/cache/form/get/:id", (req, res) => {
    res.send(forms[req.params.id * 1]);
  });

  app.get("/cache/config", (req, res) => {
    res.send({api: studioConfig, widget: widgetConfig.config});
  });

  app.get("/cache/results/get/:id", (req, res) => {
    res.send(resultsStore[req.params.id]);
  });

  app.post("/cache/results/save/:id", (req, res) => {
    const id = req.params.id;
    const results = req.body;
    resultsStore[id] = results;
    res.end();
  });

  app.post("/cache/form/save", upload.single("file"), (req, res) => {
    const {file, body} = req;
    const result = {
      params: body
    };
    if (file) {
      result.file = {url: `${APP_PATH}/${file.filename}`, mimeType: file.mimetype, filename: file.originalname};
    }
    const id = forms.push(result) - 1;
    res.redirect(`${widgetConfig.WIDGET_APP_URL}/#/${id}`);
  });
}

module.exports = setupCacheHandlers;
