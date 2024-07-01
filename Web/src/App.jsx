
import Home from "../pages/Home"
import './App.css'
import Centros from "../components/Centros";
import About from "../components/About";
import Contact from "../components/Contact";
import ResidencialRenacer from '../pages/ResidencialRenacer';
import ResidencialMonaco from '../pages/ResidencialMonaco';
import ResidencialGala from '../pages/ResidencialGala';
import Layout from './Layout';
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="residencial-renacer" element={<ResidencialRenacer/>} />
          <Route path="residencial-monaco" element={<ResidencialMonaco/>} />
          <Route path="residencial-gala" element={<ResidencialGala/>} />
          <Route path="centros" element={<Centros/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}







function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
