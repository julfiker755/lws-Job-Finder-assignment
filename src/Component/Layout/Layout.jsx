import React from 'react';
import Navber from '../Navber/Navber';
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
        <Navber></Navber> 
        <Outlet></Outlet>
        </>
    );
};

export default Layout;