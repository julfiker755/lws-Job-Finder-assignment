import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatefilters } from '../../features/filter/filterslice';

const Sorting = () => {
    const [sort,setsort]=useState("")
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(updatefilters({sort}))
    },[sort])
    return (
        <select id="lws-sort" name="sort" autocomplete="sort" onChange={(e)=>setsort(e.target.value)} className="flex-1">
        <option>Default</option>
        <option>Salary (Low to High)</option>
        <option>Salary (High to Low)</option>
    </select>
    );
};

export default Sorting;