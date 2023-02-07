import express from "express";
import { createInventoryDetails, getInventoryDetails, putInventoryDetails, deleteInventoryDetails } from "../controller/index.js";
import { validate } from '../middlewear/validate.js';
import * as inventoryValidator from "../validation/inventoryValidation.js";


const router = express.Router();


router.post("/post", validate(inventoryValidator.postSchema), createInventoryDetails);
router.get("/inventoryget", getInventoryDetails);
router.put("/inventoryupdate", validate(inventoryValidator.putSchema), putInventoryDetails);
router.delete("/inventorydelete", validate(inventoryValidator.deleteSchema), deleteInventoryDetails);

export default router;













// for my reference
// 1. created utils folder which has pick file.Utils folder contains information useful for everyone
// exported pick and imported it in the middleware folder which has validate.js file
// validate is imported into the routes folder folder which has inventory.js file;
// * means all elements preset in the validation folder and inventoryValidation.js file are taken; they are assigned to post api
// last line is taken into reference by admission pedia

//                                                                     from controller
                                                                    // |
// router.post("/post", validate(inventoryValidator.postSchema), createInventoryDetails);
                                     // |
                                //  middlewear(validation is a middleware we are usinng joi for it)
