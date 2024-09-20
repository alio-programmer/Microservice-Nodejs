const express = require("express");
const app = express();

const port = 3002;

app.use("/test2", (req, res) => {
  res.send("Hello from Service 2");
});

app.listen(port, () => {
  console.log(
    `Server for service 2 is running on port http://localhost:${port}`
  );
});
