const rtrnAllowedParams = (updatedParams) => {

    const allowedUpdates = ["name","qunatity","description","color","size","category","price","images"];
    let returned = {}
    for(var key in updatedParams){
        if(allowedUpdates.includes(key))
            returned = {...returned , [key]:updatedParams[key]};
    }
    return returned;
}

const checkUpdated = (updatedParams) => {

}

export {rtrnAllowedParams, checkUpdated};
