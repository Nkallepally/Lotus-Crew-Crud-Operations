// import mongoose from 'mongoose';
const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/crudOperations", (data)=>{
    console.log("Database is connected succesfully")
}, (err)=>{
    console.log(err);
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = db;