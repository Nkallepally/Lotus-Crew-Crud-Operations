// import express from "express";
const express=require("express")
const app = express();

const port = process.env.PORT || 3001;
const inventoryController = require("./Routes/inventory")
const db=require('./dataBase')
// import inventoryController from "./Routes/inventory.js"


// for postman purpose
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// for checking whether our backend server is working or not
app.get("/",(req,res)=>{
  
    res.status(200).send("Inventory")
})


app.use("/inventory", inventoryController)

// app.listen should be at the end,app.use should be before app.listen
app.listen(port, (req, res) => {
    console.log( `server started at ${port}`);
});


// commands for pushing the code into git hub for pushing
