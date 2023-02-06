require('dotenv').config();
const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require("./routes/auth");


//db connection string
const connectDB = require('./db/connect')

const app = express();

//json parser
app.use(express.json());
//cors
app.use(cors({
  credentials: true,
  origin: 'http://127.0.0.1:5173',
}));


//routes
app.use("/api/v1/auth", authRoutes);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();