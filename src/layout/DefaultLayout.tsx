import { Outlet } from "react-router-dom"
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import ScrollToTop from "../components/ScrollToTop/ScrollToTop"
import React from 'react';
const DefaultLayout = ()=>{
    return<>
     <Header />
     <ScrollToTop></ScrollToTop>
         <Outlet />
        <Footer />
    </>
}
export default DefaultLayout