import { FaGoogle } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";


const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-bold">Login with Google</h2>
            <div className="mt-3">
                <button className="btn btn-warning w-[150px] mr-2"><FaGoogle className="" />Google Login</button>
                <br />
                <div className="">
                
                <button className="btn bg-lime-500 mt-2 w-[150px]"><VscGithubInverted className="bg-yellow-400 rounded-full"></VscGithubInverted>GitHub</button>
                
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;