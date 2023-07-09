const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const wordRouter = require("./routers/wordRouter");

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/words", wordRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
