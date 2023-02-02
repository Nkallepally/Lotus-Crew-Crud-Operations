import express from "express";
import inventory_model from "../Models/inventory_model"
// const express=require("express")
// const inventory_model = ("../Models/inventory_model");


 
const router = express.Router();

router.post("/post", (req, res) => {
    inventory_model.create({ item_name: req.body.item_name, item_type: req.body.item_type, available_quantity: req.body.available_quantity }).then((ProductData) => {
        res.status(200).send({ ProductData });
    }).catch((err) => {
        console.log(err);
    })
});


// router.get("/inventoryget", (req, res) => {
//     inventory_model.find().then((inventorydetails) => {
//         res.send("inventorydetails", { inventorydetails });
//     })
// });
// in get api you should either use string or an object.since you have used both error is occuring
// send() is an function,it is not a predefined function so obj.send is a obj.key,type of res is object

router.get("/inventoryget", (req, res) => {
    inventory_model.find().then((inventorydetails) => {
        res.send({ inventorydetails });
    })
});

router.put("/inventoryupdate", (req, res) => {
    inventory_model.updateOne({ item_name: req.body.item_name }, { available_quantity: req.body.available_quantity }).then((data) => {
        res.send("Updated successfully")
    })
})

router.delete("/inventorydelete", (req, res) => {
    inventory_model.deleteOne({ item_name: req.body.item_name }, { available_quantity: req.body.available_quantity }).then((data) => {
        res.send("Deleted successfully")
    })
})


// module.exports = router;
export default router;