// const mongoose = require("mongoose");

// // connection
// mongoose.connect('mongodb://127.0.0.1:27017/rider-data').then(()=>{
//     console.log("Mongodb connected");
// }).catch((err)=>{
//     console.log("Mongodb connected err = ", err);
// })


import mongoose from "mongoose";
 
export default function connectDB() {
  const url = "mongodb://127.0.0.1:27017/rider-data";
 
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });
 
  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}