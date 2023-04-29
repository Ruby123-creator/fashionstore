
import { cartVariables } from "../Constants/Apiconstants"


const cartinitialState={
    cartItems:[],
}

export const cartReducer=(state=cartinitialState,action)=>{
    switch(action.type){
        case cartVariables.ADD_TO_CART:
          console.log(action.payload)   
          const obj = action.payload;
        //   console.log(obj)
          return{
                ...state,
                cartItems:[...state.cartItems,{...obj}],
            };
           case cartVariables.REMOVE_ITEMS:
            return{
                ...state,
                cartItems:state.cartItems.filter((item)=>item.id!==action.payload)
            } 
            default:
                return state;
    }
}