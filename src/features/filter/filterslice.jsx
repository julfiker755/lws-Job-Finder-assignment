import { createSlice } from "@reduxjs/toolkit";

const initialState={
    filters:"",
    sort:"",
    search:""
}



const filterslice =createSlice({
    name:"filter",
    initialState,
    reducers:{
       updatefilters:(state,action)=>{
        state={...state,...action.payload}
        return state
       }
    }
});
export const {updatefilters}=filterslice.actions
export default filterslice.reducer;