const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const meterRouter = require("./routes/meter");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// DB
const db = require("./config/db_connect");
db.connect();

app.use(indexRouter);
app.use(usersRouter);
app.use(meterRouter);

module.exports = app;
