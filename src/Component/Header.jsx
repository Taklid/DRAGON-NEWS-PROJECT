import moment from 'moment';
import logo from '../assets/assets/logo.png'

const Header = () => {
    return (
        <div className=''>
            <div className='logo mt-4 flex flec-col justify-center items-center'>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <div className='text-center'>
                <p className='text-gray-500'>Journalism Without Fear or Favour</p>
                <p className='font-bold'>{moment().format("dddd, MMMM Do YYYY,") }</p>
            </div>
        </div>
    );
};

export default Header;