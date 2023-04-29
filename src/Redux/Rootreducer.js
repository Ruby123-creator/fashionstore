import { combineReducers } from "redux";
import { dataReducer } from "./Reducers/Reducer";
import { cartReducer } from "./Reducers/CartReducer";

const rootReducer = combineReducers({
    data: dataReducer,
    cart:cartReducer
})

export default rootReducer;