import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config()
import db from "./config/dataBase.js"
import inventoryController from "./Routes/inventory.js"

import { reqHandlingFunc } from "./controller/index.js";


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/", reqHandlingFunc);
app.use("/inventory", inventoryController)

app.listen(process.env.PORT);
console.log("App listening on port " + process.env.PORT);






// for my reference will delete later
// installed
// npm i dotenv
// npm i http-status




















// for my reference will delete later
// command to run the program
// node --experimental-specifier-resolution=node server.js

// commands for pushing the code into git hub for pushing
// git remote add origin https://github.com/Nkallepally/Lotus-Crew-Crud-Operations.git
// git branch -M main
// git push -u origin main
