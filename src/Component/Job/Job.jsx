import React from 'react';
import { useSelector } from 'react-redux';
import Jobcard from './Jobcard';

const Job = () => {
    const {job,isLoading,isError,error}=useSelector(state=>state.jobs)
    const {filters,search,sort}=useSelector(state=>state.fill)
    {isError && console.log(error)}
    let content=null
    if(isLoading) content=<h2>Loading.....</h2>
    if(!isLoading && isError) content=<div>{error}</div>
    if(!isLoading && !isError && job?.length === 0) content=<div>Your Job card not found</div>
    if(!isLoading && !isError && job?.length > 0) content=job.filter(job=>{
    if (filters === '') {
      return true;
    } else {
      return job.type === filters;
    }
    }).filter(jobs=>(jobs.title.toLowerCase().includes(search.toLowerCase())))
    .sort((a,b)=>{
      if(sort === 'Salary (Low to High)'){
        return a.salary - b.salary
      }else if(sort === 'Salary (High to Low)'){
        return b.salary - a.salary
      }else{
        return true
      }
    })
    .map(jobs=><Jobcard key={jobs.id} job={jobs}></Jobcard>)
    return (
        <div className="jobs-list">
        {/* <!-- Single Job 1--> */}
          {content}
        {/* <!-- Single Job 1--> */}
    </div>
    );
};

export default Job;