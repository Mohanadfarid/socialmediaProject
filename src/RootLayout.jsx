import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        // add navbar here
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
        // add footer here!
    );
}

export default RootLayout;
