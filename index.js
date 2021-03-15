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
  const getHotels= await hotelModel.find().lean().exec();
  res.json(getHotels);
})

app.get("/hotels/:id", async (req,res)=>{
  const hotelId= await hotelModel.findOne({_id:req.params.id}).lean().exec();
  res.json(hotelId);
  //next();
})
app.post("/post/hotels", async (req, res) => {
  await hotelModel.create({name:req.body.name,address :req.body.address,city :req.body.city,country : req.body.country,stars :req.body.stars ,hasSpa :req.body.hasSpa,hasPool : req.body.hasPool,priceCategory : req.body.priceCategory });
  res.send(" ajouté");
})

app.put("/update/hotels/:id", async (req, res) => {
  const hotelupdate=await hotelModel.updateOne(
        {_id:req.params.id}
        ,{name:" moss Palace"}).lean().exec();
      res.json(hotelupdate);
})

app.delete("/delete/hotels/:id", async (req,res)=>{
  const hotelDelete= await hotelModel.deleteOne({_id:req.params.id}).lean().exec();
  res.json(hotelDelete);
  //next();
})

app.get('/hotels', async (req, res) => {
  try {
      if (req.query.limit) {
          if (req.query.limit > 0) {
              const limitHotels = await hotelsModel.aggregate().limit(parseInt(req.query.limit));
              res.json(limitHotels)
          } else {
              res.send("Erreur: passe moi un chiffre!")
          }
      } else {
          const allHotels = await hotelsModel.find().lean().exec()
          res.json(allHotels)
      }
  } catch (error) {
      res.send(error)
  }
})

function searchHotel() {
  hotelModel.findOne({
    //reutiliser avec params ?
    //revoir video poppulate2 à 18min.
  }).lean().exec();
  return hotets._id;
}

