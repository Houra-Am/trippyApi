const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  country: String,
  stars: Number,
  cuisine: String,
  priceCategory: Number,
});

const restaurantModel = mongoose.model("restaurant", restaurantSchema);

module.exports = restaurantModel;
