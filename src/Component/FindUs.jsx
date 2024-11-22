import { CiTwitter } from "react-icons/ci";
import { FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";


const FindUs = () => {
    return (
        <div className="mt-3">
            <div className="">
                <h2 className="text-purple-600 font-extrabold">Find Us On</h2>
            </div>
            <div className="mt-3">
                <button className="btn bg-lime-400 w-[120px]"><FaSquareFacebook className="" />FaceBook</button>
                <br />
                <button className="btn bg-lime-400 w-[120px]"><CiTwitter />Twitter</button>
                <br />
                <button className="btn bg-lime-400 w-[120px]"><GrInstagram />InstaGram</button>
            </div>
        </div>
    );
};

export default FindUs;