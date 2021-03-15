//Ajouté les try & catch
//lire la doc pour update et relire cours sur les query params
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const hotelModel = require("./models/hotels");
const restaurantModel = require("./models/restaurants");

mongoose.connect(
  "mongodb://localhost:27017/trippy_basics",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("DB Connectée");
  }
);

const port = 8000;
const app = express();

app.listen(port, () => {
  console.log("server ready" + port);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ------------------------- >       Hotels Get hotelModel       < -----------------------
app.get("/hotels", async (req, res) => {
  const hotels = await hotelModel.find().lean().exec();
  res.json(hotels);
});

// ------------------------- >  Restaurants Get restaurantModel  < -----------------------
app.get("/restaurants", async (req, res) => {
  const restaurants = await restaurantModel.find().lean().exec();
  res.json(restaurants);
});

// ------------------------- >     hotelModel Hotels Get/:id    < -----------------------
app.get("/hotels/:id", async (req, res) => {
  const hotels = await hotelModel.findOne({ _id: req.params.id }).lean().exec();
  res.json(hotels);
  //next();
});

// ------------------------- >   restaurantModel Restaurants Get/:id  < -----------------------
app.get("/restaurants/:id", async (req, res) => {
  const restaurants = await restaurantModel
    .findOne({ _id: req.params.id })
    .lean()
    .exec();
  res.json(restaurants);
  //next();
});

// ------------------------- >   Post Hotels Create   < -----------------------
app.post("/post/hotels", async (req, res) => {
  await hotelModel.create({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    stars: req.body.stars,
    hasSpa: req.body.hasSpa,
    hasPool: req.body.hasPool,
    priceCategory: req.body.priceCategory,
  });
  res.send("ajouté");
});

// ------------------------- >  Post restaurants Create  < -----------------------
app.post("/post/restaurants", async (req, res) => {
  await restaurantModel.create({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    stars: req.body.stars,
    cuisine: req.body.cuisine,
    priceCategory: req.body.priceCategory,
  });
  res.send("ajouté");
});

// ------------------------- >  Put hotels update  < -----------------------
app.put("/hotels/:id", async (req, res) => {
  await restaurantsModel.updateOne({});
});

// ------------------------- >  Put restaurants update  < -----------------------
app.put("/update/restaurants/:id", async (req, res) => {
  const restaurantUpdate = await restaurantModel
    .updateOne({ _id: req.params.id }, { name: req.query.name })
    .exec();
  res.json(restaurantUpdate);
});

// ------------------------- >  Put hotels delete  < -----------------------
app.delete("delete/hotels/:id", async (req, res) => {
  const hotels = await hotelModel
    .deleteOne({ _id: req.params.id })
    .lean()
    .exec();
  res.json(hotels);
  //next();
});

// ------------------------- >  Put restaurants delete  < -----------------------
app.delete("delete/restaurants/:id", async (req, res) => {
  const restaurants = await restaurantModel
    .deleteOne({ _id: req.params.id })
    .lean()
    .exec();
  res.json(restaurants);
  //next();
});
