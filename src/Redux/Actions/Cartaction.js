import { cartVariables } from "../Constants/Apiconstants";

export const addToCart=(data)=>{
    return{
        type:cartVariables.ADD_TO_CART,
        payload:data,
    }
}

export const removeItems =(data)=>{
    return{
        type:cartVariables.REMOVE_ITEMS,
        payload:data,
    }
}