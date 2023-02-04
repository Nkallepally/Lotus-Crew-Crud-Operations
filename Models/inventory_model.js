import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    item_name: String,
    inventory_type: String,
    available_quantity: Number
});

const inventory_model = mongoose.model("inventories", inventorySchema);

export default inventory_model;