const express = require("express");
const app = express();
const apiRouter = require("./routes/apiRouter");
const dbConnection = require("./db/connection");

app.use((req, res, next) => {
    console.log("Middleware has been successfully executed!");
    next()
});

app.use(express.json());
app.use("/todolistfullstack/v1", apiRouter);

app.use((req, res, next) => {
    res.status(404).send("404 error - the page resource was not found!")
});

module.exports = app;