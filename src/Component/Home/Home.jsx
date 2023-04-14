import React, { useEffect, useState } from 'react';
import Sideber from './Sideber';
import { useDispatch, useSelector } from 'react-redux'
import { fetchgetdata } from '../../features/Job/Jobslice';
import Job from '../Job/Job';
import Search from './Search';
import Sorting from './Sorting';


const Home = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchgetdata())
    },[])
    return (
        <>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
         <Sideber></Sideber>
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                    <h1 className="lws-section-title">All Available Jobs</h1>
                    <div className="flex gap-4">
                        <Search></Search>
                        <Sorting></Sorting>
                    </div>
                </div>

               <Job></Job>
            </main>
        </div>
    </div>
            
        </>
    );
};

export default Home;