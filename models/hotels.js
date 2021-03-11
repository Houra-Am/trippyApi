const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/trippy_basics",{useNewUrlParser: true, useUnifiedTopology: true },()=>{console.log("Ready to hack")});

const hotelSchema = new mongoose.Schema({
    name:String,
    address :String,
    city :String,
    country : String,
    stars :Number ,
    hasSpa :Boolean,
    hasPool : Boolean,
    priceCategory : Number 
})

const hotelModel = mongoose.model("hotels", hotelSchema);

module.exports= hotelModel;