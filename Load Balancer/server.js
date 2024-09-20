const express = require("express");
const roundrobin = require("./Loadbalancing techniques/Roundrobin");
const serverconfig = require("./config.json").Servers;
const app = express();

const servers = serverconfig.map((Server) => ({
  ...Server,
}));

const Loadbalancingalgo = "Roundrobin";

app.use((req, res) => {
  try {
    if (Loadbalancingalgo === "Roundrobin") {
      roundrobin(servers, req, res);
    } else {
      res.send("Load balancing algorithm not found");
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  try {
    console.log(`Load Balancer is running at http://localhost:8000`);
  } catch (error) {
    console.log(error);
  }
});
