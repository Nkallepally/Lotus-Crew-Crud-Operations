import express from "express";
import createInventoryDetails from "../controller/index.js";
import getInventoryDetails from "../controller/index.js";
import putInventoryDetails from "../controller/index.js";
import deleteInventoryDetails from "../controller/index.js";
const router = express.Router();

router.post("/post", createInventoryDetails);
router.get("/inventoryget",getInventoryDetails);
router.put("/inventoryupdate",putInventoryDetails);
router.delete("/inventorydelete",deleteInventoryDetails)


export default router;


