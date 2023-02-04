import express from "express";
import {createInventoryDetails,getInventoryDetails,putInventoryDetails,deleteInventoryDetails} from "../controller/index.js";
const router = express.Router();

router.post("/post", createInventoryDetails);
router.get("/inventoryget",getInventoryDetails);
router.put("/inventoryupdate",putInventoryDetails);
router.delete("/inventorydelete",deleteInventoryDetails)


export default router;


