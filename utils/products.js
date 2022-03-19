import Joi from 'joi'

const rtrnAllowedParams = (updatedParams) => {

    const allowedUpdates = ["name","qunatity","description","color","size","category","price","images"];
    let returned = {}
    for(var key in updatedParams){
        if(allowedUpdates.includes(key))
            returned = {...returned , [key]:updatedParams[key]};
    }
    return returned;
}

const validateUpdated = (updatedParams) => {
    
    const schema = Joi.object({
        name: Joi.string().alphanum().min(3).max(30),
        qunatity: Joi.number().integer(),
        price: Joi.number(),
        color: Joi.array().items(Joi.string().valid("red","black","white")),
        size: Joi.array().items(Joi.string().valid("Small","Meduim","Large"))
    })

    return schema.validate(updatedParams);
}

export {rtrnAllowedParams, validateUpdated};
