const mongoose = require("mongoose");
const hotelModel= require("./models/hotels");

mongoose.connect("mongodb://localhost:27017/trippy_basics",{useNewUrlParser: true, useUnifiedTopology: true },()=>{console.log("Ready to hack")});
const hotels=[
    {
    name:"Le Plaza Athénée",
    address :"25, avenue Montaigne",
    city :"Paris",
    country : "France",
    stars :5 ,
    hasSpa :true,
    hasPool : true,
    priceCategory : 1 
    },
    {
        name:"Le Four Seasons Hôtel George V",
        address :"31,avenue George V",
        city :"Paris",
        country : "France",
        stars :5 ,
        hasSpa :true,
        hasPool : true,
        priceCategory : 2 
        },
        {
            name:" Le Mandarin Oriental Paris",
            address :"251, rue Saint-Honoré",
            city :"Paris",
            country : "France",
            stars :5 ,
            hasSpa :true,
            hasPool : true,
            priceCategory : 3 
            },
]
async ()=>{
await hotelModel.deleteMany({}).exec();
hotelModel.create(hotels);
}
