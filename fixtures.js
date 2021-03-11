const mongoose = require("mongoose");
const hotelModel= require("./models/hotels");

mongoose.connect("mongodb://localhost:27017/trippy_basics",{useNewUrlParser: true, useUnifiedTopology: true },()=>{console.log("Ready to hack")});

async ()=>{
await hotelModel.deleteMany({});}