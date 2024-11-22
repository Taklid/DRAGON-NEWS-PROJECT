import { Link } from 'react-router-dom';
import user1 from '../assets/assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div>
            <div className='flex justify-between items-center mt-3 max-w-[1200px]'>
                <div className='lg:ml-32 bg-yellow-500 px-2 rounded-[3px]'>
                    <h1>{user && user.email}</h1>
                </div>
                <div className="flex gap-2 items-center font-bold">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/career'>Career</Link>


                </div>
               
               

                <div className='flex gap-2 items-center'>
                {
                user && user?.email ? <div><img className='w-[40px] h-[40px] rounded-full' src={user?.photoURL} alt="" /></div> :  <img className='w-7' src={user1} alt="" />
               }
                    
                    {user && user?.email ? (
          <button onClick={logOut}  className="btn bg-lime-600 rounded-[5px]">
            Log-Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn bg-purple-600 rounded-[5px]">
            Login
          </Link>
        )}
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Navber;