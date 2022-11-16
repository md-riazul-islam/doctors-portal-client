import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shard/Footer/Footer';
import Navbar from '../Pages/Shard/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;