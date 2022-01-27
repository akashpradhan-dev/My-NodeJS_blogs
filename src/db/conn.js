const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CLOUD)
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch(() => {
    console.error.bind(console, "connection error:");
  });
