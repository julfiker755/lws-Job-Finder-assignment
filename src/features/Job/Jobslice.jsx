import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { deletedata, editdata, getgob, postdata } from './Jobapi'
const initialState={
    job:[],
    isLoading:false,
    isError:false,
    error:"",
    editing:{},
}
// get data
export const fetchgetdata=createAsyncThunk('job/fetchgetdata',async()=>{
    const data=await getgob()
    return data
})
// create data
export const createjob=createAsyncThunk('job/createjob',async(data)=>{
    const job=await postdata(data)
    return job
})
// create edit
export const createedit=createAsyncThunk('job/createedit',async({id,data})=>{
    const job=await editdata(id,data)
    return job
})
// delete job
export const  deletejob=createAsyncThunk('job/deletejob',async(id)=>{
    const job=await deletedata(id)
    return job
})

const Jobslice =createSlice({
    name:"jobos",
    initialState,
    reducers:{
      Activedit:(state,action)=>{
        state.editing=action.payload
      },
      Activeblank:(state)=>{
        state.editing={}
      }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchgetdata.pending,(state)=>{
            state.isLoading=true;
            state.isError=false;
        })
        .addCase(fetchgetdata.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.job=action.payload
        })
        .addCase(fetchgetdata.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.job=[];
            state.error=action.error?.message
        })
        .addCase(createjob.pending,(state)=>{
            state.isLoading=true;
            state.isError=false;
        })
        .addCase(createjob.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.job.push(action.payload)
        })
        .addCase(createjob.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.job=[];
            state.error=action.error?.message
        })
        .addCase(createedit.pending,(state)=>{
            state.isLoading=true;
            state.isError=false;
        })
        .addCase(createedit.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            const updateindex=state.job.findIndex(j=>j.id === action.payload.id)
            state.job[updateindex]=action.payload
        })
        .addCase(createedit.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.job=[];
            state.error=action.error?.message
        })
        .addCase(deletejob.pending,(state)=>{
            state.isLoading=true;
            state.isError=false;
        })
        .addCase(deletejob.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.job=state.job.filter(job=>job.id !== action.meta.arg)
        })
        .addCase(deletejob.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.job=[];
            state.error=action.error?.message
        })
    }
})
export const {Activedit,Activeblank,Related}=Jobslice.actions
export default Jobslice.reducer;