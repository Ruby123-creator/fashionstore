
import { dataVariables } from "../Constants/Apiconstants";

const initialState = {
    loading: true,
    data: [],
    error: ""
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case dataVariables.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case dataVariables.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case dataVariables.FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

