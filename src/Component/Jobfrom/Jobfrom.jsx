import React, { useEffect, useState } from 'react';
import Sideber from '../Home/Sideber';
import { useDispatch, useSelector } from 'react-redux'
import { Activeblank, createedit, createjob } from '../../features/Job/Jobslice';
import { useNavigate } from 'react-router-dom';

const Jobfrom = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [hfrom,sethfrom]=useState(false)
  const [job,setjob]=useState({
    title:"",
    type:"",
    salary:"",
    detline:""
  })
  const {editing}=useSelector(state=>state.jobs)
  // empty from
  const resetfrom=()=>{
    setjob({
      title:"",
      type:"",
      salary:"",
      detline:""
    })
  }
  useEffect(()=>{
    const {id,title,type,salary,detline}=editing || {}
    if(id){
      sethfrom(true)
      setjob({
        title:title,
        type:type,
        salary:salary,
        detline:detline,
      })
    }else{
      resetfrom()
      sethfrom(false)
    }
  },[editing])
  // Input hanlde
  const handleinput=(event)=>{
    const {name,value}=event.target
    setjob((prejob)=>({...prejob,[name]:value}))
  }
  // Handle submit
  const handlesubmit=(event)=>{
   event.preventDefault()
   dispatch(createjob(job))
   navigate("/")
  //  empty form 
   resetfrom()
  }
  // handle update
  const handleupdate=()=>{
    dispatch(createedit({
      id:editing?.id,
      data:job,
    }))
    resetfrom()
    navigate("/")
  }
  // cancle edit
  const canceledit=()=>{
    resetfrom()
    dispatch(Activeblank())
    navigate("/")
  }
    return (
        <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
         <Sideber></Sideber>
        <div class="lg:pl-[14rem] mt-[5.8125rem]">
          <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <h1 class="mb-10 text-center lws-section-title">Add New Job</h1>
            <div class="max-w-3xl mx-auto">
              <form class="space-y-6" onSubmit={hfrom ? handleupdate:handlesubmit}>
                <div class="fieldContainer">
                  <label for="lws-JobTitle" class="text-sm font-medium text-slate-300">Job Title</label>
                  <select id="lws-JobTitle" value={job.title} name="title" onChange={handleinput} required>
                    <option  hidden selected>Select Job</option>
                    <option>Software Engineer</option>
                    <option>Software Developer</option>
                    <option>Full Stack Developer</option>
                    <option>MERN Stack Developer</option>
                    <option>DevOps Engineer</option>
                    <option>QA Engineer</option>
                    <option>Product Manager</option>
                    <option>Social Media Manager</option>
                    <option>Senior Executive</option>
                    <option>Junior Executive</option>
                    <option>Android App Developer</option>
                    <option>IOS App Developer</option>
                    <option>Frontend Developer</option>
                    <option>Frontend Engineer</option>
                  </select>
                </div>
    
                <div class="fieldContainer">
                  <label for="lws-JobType">Job Type</label>
                  <select id="lws-JobType" value={job.type} name="type" onChange={handleinput} required>
                    <option  hidden selected>Select Job Type</option>
                    <option>Full Time</option>
                    <option>Internship</option>
                    <option>Remote</option>
                  </select>
                </div>
    
                <div class="fieldContainer">
                  <label for="lws-JobSalary">Salary</label>
                  <div class="flex border rounded-md shadow-sm border-slate-600">
                    <span class="input-tag">BDT</span>
                    <input type="number" value={job.salary}  name="salary" onChange={handleinput} id="lws-JobSalary" required class="!rounded-l-none !border-0"
                      placeholder="20,00,000" />
                  </div>
                </div>
    
                <div class="fieldContainer">
                  <label for="lws-JobDeadline">Deadline</label>
                  <input type="date" value={job.detline} name="detline" onChange={handleinput} id="lws-JobDeadline" required />
                </div>
    
                <div class="text-right space-x-[20px]">
                  <button type="submit"   id="lws-submit" class="cursor-pointer btn btn-primary bg-[#0e557b] w-fit">
                    {hfrom ? "Update":"Submit"}
                  </button>
                </div>
              </form>
              {hfrom && <button type="submit" onClick={()=>canceledit()}   id="lws-submit" class="cursor-pointer btn btn-primary bg-[#a25015] w-fit">
                    cancel edit
                  </button>}
            </div>
          </main>
        </div>
      </div>
    );
};

export default Jobfrom;