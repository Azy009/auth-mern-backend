const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const connectdb = require("./db/connection");
const cors = require("cors");
require('./models/usertable')
const app = express();
app.use(cors())
const port = 8000;
const database = 'mongodb+srv://azy6049:A3VTGfRFa7tJdxsF@cluster0.whbyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.set('strictQuery', false);
connectdb(database);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",userRouter);
app.listen(port, () => {
    console.log(`server is runing at ${port}`);
  });