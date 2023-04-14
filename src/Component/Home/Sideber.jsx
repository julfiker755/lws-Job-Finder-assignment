import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updatefilters } from '../../features/filter/filterslice';

const Sideber = () => {
    const [filters,setfilter]=useState("")
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(updatefilters({filters}))
    },[filters])
    return (
        <>
           <div className="sidebar">
            <nav>
                <ul className="space-y-4">
                    <li className="main-menu menu-active cursor-pointer" id="lws-alljobs-menu">
                            <button onClick={()=>setfilter("")} >
                            <i className="fa-solid fa-briefcase"></i>
                            <span> All Available Jobs</span>
                            </button>
                        <ul className="space-y-6 lg:space-y-2 ">
                            <li className="sub-menu cursor-pointer"  id="lws-internship-menu">
                                    <button onClick={()=>setfilter("Internship")}>
                                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                    <span>Internship</span>
                                    </button>
                            </li>
                            <li  className="sub-menu cursor-pointer"  id="lws-fulltime-menu">
                                    <button onClick={()=>setfilter("Full Time")}>
                                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    Full Time
                                    </button>
                            </li>
                            <li className="sub-menu cursor-pointer"  id="lws-remote-menu">
                                   <button onClick={()=>setfilter("Remote")}>
                                   <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                    Remote
                                   </button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/addjobs" className="main-menu" id="lws-addJob-menu">
                            <i className="fa-solid fa-file-circle-plus"></i>
                            <span>Add NewJob</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div> 
        </>
    );
};

export default Sideber;