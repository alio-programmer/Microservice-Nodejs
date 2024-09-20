const express = require("express");
const serverconfig = require("./config.json").Servers;

const createserver = (host, port) => {
  const app = express();
  app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
  });
};

serverconfig.forEach((server) => createserver(server.host, server.port));
