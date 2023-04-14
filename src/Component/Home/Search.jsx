import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatefilters } from '../../features/filter/filterslice';

const Search = () => {
    const [search,setinput]=useState("")
    const dispatch=useDispatch()
        useEffect(()=>{
            dispatch(updatefilters({search}))
        },[search])
 
    return (
        <div className="search-field group flex-1">
           <form>
           <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input onChange={(e)=>setinput(e.target.value)} type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" />
           </form>
        </div>
    );
};

export default Search;