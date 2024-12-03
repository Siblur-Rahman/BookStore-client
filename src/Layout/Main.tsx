import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="pt-20 min-h-screen max-w-screen-xl">
        <Outlet/>
    </div>
    );
};

export default Main;