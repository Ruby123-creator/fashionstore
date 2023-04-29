import {dataVariables} from '../Constants/Apiconstants';
import axios from 'axios';
export const fetchrequest =()=>({
  type:dataVariables.FETCH_DATA_REQUEST 
})

export const fetchsuccess=(data)=>{
    return{
        type:dataVariables.FETCH_DATA_SUCCESS,
        payload:data
    }
    
}

export const fetchfailure=(error)=>{
    return{
        type:dataVariables.FETCH_DATA_FAILURE,
        payload:error
    }
    
}




export const fetchData = () => async (dispatch) => {
    dispatch(fetchrequest)
    try{
        const reponse = await axios.get("https://dummyjson.com/products")
        dispatch(fetchsuccess(reponse.data))
    }
    catch(error){
        dispatch(fetchfailure(error.message))

        // error.name 
        // error.message
    }
}