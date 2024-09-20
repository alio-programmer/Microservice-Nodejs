const express = require("express");
const app = express();

const port = 3001;

app.get("/test1", (req, res) => {
  res.send("Hello from Service 1");
});

app.listen(port, () => {
  console.log(
    `Server for service 1 is running on port http://localhost:${port}`
  );
});
