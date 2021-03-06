const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/users");
const posts = require('./routes/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => {
    console.log(err);
  });

app.use('/users', users);
app.use('/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
