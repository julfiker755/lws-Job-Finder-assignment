import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Errorpage from '../Errorpage/Errorpage';
import Jobfrom from '../Jobfrom/Jobfrom';

const routes =createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:"/addjobs",
                element:<Jobfrom></Jobfrom>
            }
        ]
    }
])
export default routes;