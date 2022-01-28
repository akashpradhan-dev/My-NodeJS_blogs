const mongoose = require("mongoose");

mongoose
  .connect(process.env.LOCAL_DB)
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => {
    console.log(err);
  });
