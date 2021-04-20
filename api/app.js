var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
require('dotenv').config();

// MongoDB
const mongoose = require("mongoose");
mongoose
  .connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@khoatran.v5cxx.mongodb.net/booking?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error: ", err));

var index = require('./routes/index');
// Express
var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/availability", require("./routes/availabilityRoute"));
app.use("/reserve", require("./routes/reservationRoute"));

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));

