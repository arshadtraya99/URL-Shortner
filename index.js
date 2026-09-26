const express = require("express");
const urlRouter = require("./routes/url");

const app = express();

app.use(express.json());

app.use("/url", urlRouter);

app.listen(8000, () => {
    console.log("Running at Port Number : 8000");
});