import inventory_model from "../Models/inventory_model.js"

export const createInventoryService = async (item_name, item_type, available_quantity) => {
    try {
        const ProductData = await inventory_model.create({ item_name: item_name, item_type: item_type, available_quantity: available_quantity });
        return ProductData;
    } catch (err) {
        console.log(err);
    }
}


export const getInventoryService = async () => {
    try {
        const inventoryDetails = await inventory_model.find();
        return inventoryDetails
    } catch (err) {
        console.log(err)
    }
}

export const putInventoryService = async (item_name, available_quantity) => {
    try {
        const inventoryDetails = await inventory_model.updateOne(item_name, available_quantity);
        return inventoryDetails
    } catch (err) {
        console.log(err)
    }

}

export const deleteInventoryService = async (item_name, available_quantity) => {
    try {
        const inventoryDetails = await inventory_model.deleteOne(item_name, available_quantity);
        return inventoryDetails
    } catch (err) {
        console.log(err)
    }
}

