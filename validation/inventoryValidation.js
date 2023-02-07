import Joi from "joi";
export const postSchema = {
    body: Joi.object().keys({
        item_name: Joi.string().required(),
        inventory_type: Joi.string().required(),
        available_quantity: Joi.number().required()
    })
}

export const putSchema = {
    body: Joi.object().keys({
        item_name: Joi.string().required(),
        available_quantity: Joi.number().required()
    })
}

export const deleteSchema = {
    body: Joi.object().keys({
        item_name: Joi.string().required(),
        available_quantity: Joi.number().required()
    })
}