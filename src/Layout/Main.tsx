import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
    return (
        <div className="">
                <Navbar/>
                <Outlet/>
        </div>
    );
};

export default Main;