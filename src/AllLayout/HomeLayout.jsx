

import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import LatestNews from "../Component/LatestNews";
import LeftNavber from "../Component/LeftNavber";
import Navber from "../Component/Navber";
import RightNav from "../Component/RightNav";


const HomeLayout = () => {
    return (
        <div className="">
           {/* header */}
           <Header></Header>
           <section className="max-w-[1200px] mx-auto">
               <LatestNews></LatestNews>
           </section>
           <div>
                    <Navber></Navber>
           </div>
           {/* nav */}
           {/* main */}
           <div className="max-w-[1200px]  mx-auto pt-5 grid grid-cols-12">
            <aside className="left col-span-3"><LeftNavber></LeftNavber></aside>
            <section className="col-span-6"><Outlet></Outlet></section>
            <aside className="col-span-3"><RightNav></RightNav></aside>
           </div>
        </div>
    );
};

export default HomeLayout;