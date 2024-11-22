import { Outlet } from "react-router-dom";
import Navber from "./Navber";


const AuthLayout = () => {
    return (
        <div className="bg-gray-300">
            <div className="max-w-[1200px] mx-auto px-4 py-2">
                <Navber></Navber>
               
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
