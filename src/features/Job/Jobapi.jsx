import { axiosinstance } from "../../ulits/axios"

export const getgob=async()=>{
    const res=await axiosinstance.get("/jobs")
    return res.data
}
export const postdata=async(data)=>{
    const res=await axiosinstance.post("/jobs",data)
    return res.data
}
export const editdata=async(id,data)=>{
    const res=await axiosinstance.put(`/jobs/${id}`,data)
    return res.data
}
export const deletedata=async(id)=>{
    const res=await axiosinstance.delete(`/jobs/${id}`)
    return res.data
}