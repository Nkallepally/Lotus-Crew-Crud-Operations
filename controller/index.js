import { createInventoryService, getInventoryService, putInventoryService, deleteInventoryService } from "../service/inventory.js"


export const reqHandlingFunc = (req, res) => {
    res.status(200).send("Inventory Page")
}

export const createInventoryDetails = async (req, res) => {
    const { item_name, item_type, available_quantity } = req.body;
    const productDataRes = await createInventoryService(item_name, item_type, available_quantity)

    res.status(200).send({ ProductData: productDataRes });


}


export const getInventoryDetails = async (req, res) => {
    const { item_name, item_type, available_quantity } = req.body;
    const inventorydetailsRes = await getInventoryService(item_name, item_type, available_quantity)
    res.status(200).send({ InventoryData: inventorydetailsRes })
}

export const putInventoryDetails = async (req, res) => {
    const { item_name, available_quantity } = req.body;
    const inventorydetailsRes = await putInventoryService(item_name, available_quantity);
    res.status(200).send({ InventoryData: inventorydetailsRes })
}
export const deleteInventoryDetails = async (req, res) => {
    const { item_name, available_quantity } = req.body;
    const inventorydetailsRes = await deleteInventoryService(item_name, available_quantity);
    res.status(200).send({ InventoryData: inventorydetailsRes })
}



