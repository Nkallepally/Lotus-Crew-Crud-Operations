import { createInventoryService, getInventoryService, putInventoryService, deleteInventoryService } from "../service/inventory.js"
import httpStatus from 'http-status';



export const reqHandlingFunc = (req, res) => {
    res.status(httpStatus.OK).send("Inventory Page")
}



export const createInventoryDetails = async (req, res) => {
    try {
        const { item_name, item_type, available_quantity } = req.body;
        const productDataRes = await createInventoryService(item_name, item_type, available_quantity)
        res.status(httpStatus.OK).send({ ProductData: productDataRes });
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(errorMessage);
    }
}

export const getInventoryDetails = async (req, res) => {
    try {
        const { item_name, item_type, available_quantity } = req.body;
        const inventorydetailsRes = await getInventoryService(item_name, item_type, available_quantity)
        res.status(httpStatus.OK).send({ InventoryData: inventorydetailsRes })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(errorMessage);
    }

}

export const putInventoryDetails = async (req, res) => {
    try {
        const { item_name, available_quantity } = req.body;
        const inventorydetailsRes = await putInventoryService(item_name, available_quantity);
        res.status(httpStatus.OK).send("Updated Successfully")
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(errorMessage);
    }

}
export const deleteInventoryDetails = async (req, res) => {
    try {
        const { item_name, available_quantity } = req.body;
        const inventorydetailsRes = await deleteInventoryService(item_name, available_quantity);
        res.status(httpStatus.OK).send("Deleted Successfully")
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(errorMessage);
    }

}



