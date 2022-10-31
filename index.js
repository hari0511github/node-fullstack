
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Database Connection
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})  

const db = mongoose.connection;

db.once('open', (err)=>console.log("Connected to Database..."))

db.on('error', (err)=>console.error(err))

// Routes API Connection 
app.use('/users',require("./routes/users"))
app.use('/auth',require("./routes/auth"))

// Configure Server Port
const port = process.env.SERVER_PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })