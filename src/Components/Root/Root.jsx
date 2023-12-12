import { Outlet } from "react-router-dom";
import SideBar from "../Home/SideBar";
import Footer from "../Home/Footer";
// import Home from "../Home/Home";
// import Navbar from "../Home/Navbar";


const Root = () => {
    return (
        <div>
            <div className="flex lg:flex-row flex-col max-w-6xl mx-auto ">
                <SideBar></SideBar>
                <div className="flex-1 lg:ml-16">
                    <Outlet></Outlet>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;