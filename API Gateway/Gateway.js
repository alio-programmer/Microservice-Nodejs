const express = require("express");
const app = express();
const Gatewayroutes = require("./Routes/Gateway.routes");
const port = 3000;

app.use(express.json());
app.use("/", Gatewayroutes);
app.use("/", (req, res) => {
  res.send("Hello from API Gateway");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
