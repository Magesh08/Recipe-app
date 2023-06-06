import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://mageshvaran:Magesh12@cluster1.aysvzju.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    app.listen(3001, () => console.log("SERVER STARTED"));
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  console.log("mv")