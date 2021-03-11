const mongoose = require("mongoose");
const hotelModel = require("./models/hotels");
const restaurantModel = require("./models/restaurants");

mongoose.connect(
  "mongodb://localhost:27017/trippy_basics",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("DB Connectée");
  }
);
