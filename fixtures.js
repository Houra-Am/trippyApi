const mongoose = require("mongoose");
const hotelModel = require("./models/hotels");
const restaurantModel = require("./models/restaurants");

mongoose.connect(
  "mongodb://localhost:27017/trippy_basics",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Ready to hack");
  }
);

restaurantModel.deleteMany({}).then(() => {
  restaurantModel.create([
    {
      name: "Sora Margherita",
      address: "Piazza delle Cinque Scole, 30, 00186",
      city: "Roma",
      country: "Italia",
      stars: 3,
      cuisine: "trattoria",
      priceCategory: 2,
    },
    {
      name: "Ai Marmi",
      address: "Viale di Trastevere, 53-59, 00153",
      city: "Roma",
      country: "Italia",
      stars: 3,
      cuisine: "pizzeria",
      priceCategory: 1,
    },
    {
      name: "I Buoni Amici",
      address: "Via Aleardo Aleardi, 4/6/8, 00185",
      city: "Roma",
      country: "Italia",
      stars: 3,
      cuisine: "osteria",
      priceCategory: 2,
    },
  ]);
});
