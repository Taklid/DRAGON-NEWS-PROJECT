import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
  


const Register = () => {
    const {createNewUser, setUser, userProfile} = useContext(AuthContext);
    const navigate = useNavigate()
    const notify = () => {
        Swal.fire({
            title: "Regestation Done!",
            // text: "You clicked the button!",
            icon: "success",
            confirmButtonText: 'Back'
          });
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // const name = form.get('name');
        console.log(name, password,photo,email);
        notify();

        createNewUser(email, password)
        .then((result) => {
            // Signed up 
            const user = result.user;
            setUser(user)
            userProfile({ displayName: name, photoURL: photo})
            .then(() => {
                // Profile updated!
                navigate('/');
               
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            console.log(user);

            // ...

            
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            // ..
          });
       

    }
    return (
        <div>
            <div>
                <div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                        <form onSubmit={handelSubmit} className="card-body">
                            <h2 className="text-center font-bold">Regestation  your account</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="name" placeholder="Enter your name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="URL" name="photo" placeholder="Enter your URL" className="input input-bordered" required />
                            </div>
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
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Register</button>
                            </div>
                            {/* <ToastContainer></ToastContainer> */}
                            <div>
                                <h2 className="font-bold text-gray-400">Alredy Have An Account <Link to='/auth/login' className="text-purple-700">Login</Link></h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;