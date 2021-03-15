//Ajouté les try & catch
//lire la doc pour update et relire cours sur les query params
const mongoose = require("mongoose");
const express= require("express");
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

app.listen(port,()=>{
  console.log("server ready"); 
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/hotels", async (req,res)=>{
  const hotels= await hotelModel.find().lean().exec();
  res.json(hotels);
})

app.get("/hotels/:id", async (req,res)=>{
  const hotel= await hotelModel.findOne({_id:req.params.id}).lean().exec();
  res.json(hotel);
  //next();
})
app.post("/post/hotels", async (req, res) => {
  await hotelModel.create({name:req.body.name,address :req.body.address,city :req.body.city,country : req.body.country,stars :req.body.stars ,hasSpa :req.body.hasSpa,hasPool : req.body.hasPool,priceCategory : req.body.priceCategory });
  res.send(" ajouté");
})

app.put('/hotels/:id', async (req, res) => {
      await restaurantsModel.updateOne({
      
      });
})

app.delete("delete/hotels/:id", async (req,res)=>{
  const hotel= await hotelModel.findOne({_id:req.params.id}).lean().exec();
  res.json(hotel);
  //next();
})

const searchHotel= async()=>{
  hotelModel.findOne({
    //reutiliser avec params ?
    //revoir video poppulate2 à 18min.
  }).lean().exec();
  return hotets._id
}

