const mongoose = require("mongoose");
const config = require("./config");

mongoose
  .connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log)
  .catch(console.error);