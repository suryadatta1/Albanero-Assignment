const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require('./routes/users')

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config.js/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

  app.use('/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
