const express = require('express')
const { MongoClient } = require('mongodb');
const {ObjectId} =require('mongodb')
var cors = require('cors');
const bookRouter  = require('./controllers/booksController');
const app = express()
app.use(cors())
app.use(express.json())

app.use("/",bookRouter);

app.listen(8080, () => {
    console.log("Server is running on 8080");
});