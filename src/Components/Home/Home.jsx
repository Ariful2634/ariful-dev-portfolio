/* eslint-disable react/no-unescaped-entities */
// import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";
// import SideBar from "./SideBar";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className="min-h-screen shadow-xl rounded-2xl shadow-gray-600 mt-6 py-6 px-6">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;