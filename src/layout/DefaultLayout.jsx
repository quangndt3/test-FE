import { Outlet } from "react-router-dom"
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/footer"
import ScrollToTop from "../components/ScrollToTop/ScrollToTop"

const DefaultLayout = ()=>{
    return<>
     <Header />
     <ScrollToTop></ScrollToTop>
         <Outlet />
        <Footer />
    </>
}
export default DefaultLayout