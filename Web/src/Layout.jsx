import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet, Link } from "react-router-dom";

function Layout () {
    return (
      <>
       <Header/>
     
        <Outlet />
           
        <Footer/>
      </>
    );
  }

  export default Layout;