const Router = require("express").Router();
const axios = require("axios");
const registry = require("../registry.json");

Router.all("/:service/:path", (req, res) => {
  const service = req.params.service;
  const path = req.params.path;
  if (registry.services[service]) {
    axios({
      method: req.method,
      url: registry.services[service].url + "/" + path,
      Headers: req.headers,
      data: req.body,
    }).then((response) => {
      res.send(response.data);
    });
  } else {
    res.send("API Service not found");
  }
});

module.exports = Router;
