import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsApp from "../components/WhatsApp";
import { Outlet, Link } from "react-router-dom";

function Layout () {
    return (
      <>
       <Header/>
       <WhatsApp/>
        <Outlet />
           
        <Footer/>
      </>
    );
  }

  export default Layout;