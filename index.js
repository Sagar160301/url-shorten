const express = require("express");
const app = express();
const connect = require("./config/db");
const UrlRouter = require("./controller/url.coontroller");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", UrlRouter);
let port = 8000;
connect();
app.listen(port, () => {
  console.log("read the port ", port);
});
