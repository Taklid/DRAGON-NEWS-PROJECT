import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// import { ToastContainer toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
    const {loginUser, setUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location, navigate);
    const [error, seterror] = useState({});
      
    const loginSubmit = (e) => {
       
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.email.value;
            console.log({email, password});
      
            loginUser(email, password)


            .then((result) => {
                // Signed up 
                const user = result.user;
                setUser(user)
                navigate(location?. state ? location.state : "/");
                
    
                // ...
    
                
              })
    
              .catch((err) => {
                seterror({...error, login:'wrong pass'})
                

                // ..
              });
           
           

           
            
    };
    return (
        <div>
            <div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <form onSubmit={loginSubmit} className="card-body">
                        <h2 className="text-center font-bold">Login your account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {error.login && (<label className="label text-red-600">{error.login}</label>)}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                         
                            <h2  className="font-bold text-gray-400">Dont’t Have An Account ? <Link to='/auth/register'   className="text-purple-700">Register</Link></h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;