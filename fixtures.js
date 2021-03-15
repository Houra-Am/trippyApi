const mongoose = require("mongoose");
const hotelModel = require("./models/hotels");
const restaurantModel = require("./models/restaurants");
// voir populate à 23Min pour retrouver l'id
mongoose.connect("mongodb://localhost:27017/trippy_basics",{useNewUrlParser: true, useUnifiedTopology: true },()=>{console.log("Ready to hack")});
const hotels=[
    {
    name:"Le Plaza Athénée",
    address :"25, avenue Montaigne",
    city :"Paris",
    country : "France",
    stars :3 ,
    hasSpa :true,
    hasPool : true,
    priceCategory : 1 
    },
    {
        name:"Le Four Seasons Hôtel George V",
        address :"31,avenue George V",
        city :"Paris",
        country : "France",
        stars :3 ,
        hasSpa :true,
        hasPool : true,
        priceCategory : 2 
        },
        {
            name:" Le Mandarin Oriental Paris",
            address :"251, rue Saint-Honoré",
            city :"Paris",
            country : "France",
            stars :1 ,
            hasSpa :true,
            hasPool : true,
            priceCategory : 3 
        }
]
const HotelsCreactData = async ()=>{
await hotelModel.deleteMany({}).exec();
await hotelModel.create(hotels);
}
HotelsCreactData();

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
