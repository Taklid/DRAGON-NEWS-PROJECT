import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        
            <Link className="flex gap-5 items-center mx-auto bg-gray-400 px-2 py-2 rounded-[5px] mt-2">
                <p className="bg-red-700 px-2 py-2 text-white rounded-[5px]">Latest</p>
                <Marquee pauseOnHover={true}>
                <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>

                </Marquee>
            </Link>
        

    );
};

export default LatestNews;