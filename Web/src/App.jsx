
import Home from "../pages/Home"
import './App.css'
import ResidencialRenacer from '../pages/ResidencialRenacer';
import Layout from './Layout';
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="residencial-renacer" element={<ResidencialRenacer/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}





function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
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
