import axios from 'axios';
import React, { useContext } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../context/UserContext'
import Loading from './Loading';

const Account = () => {
  const {user, setUser, fetching} = useContext(UserContext);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const logout = async () => {
    let data = await axios.post('/logout')
    toast.error(data.data.message);
    setUser(data.data.data);
    navigate('/');
  }

  if(fetching){
    return <Loading/>
  }

  if(!fetching && !user){
    return <Navigate to={'/login'}/>
  }

  return (
    <div>
      <nav className='w-full flex justify-center mt-10 gap-5 font-raleway'>
        <Link className={`py-2 px-4 hover:rounded-full hover:shadow-lg ${location == '/account' &&  'bg-primary text-white shadow-lg rounded-full'}` } to={'/account'}>My Profile</Link>
        <Link className={`py-2 px-4 hover:rounded-full hover:shadow-lg ${location == '/account/bookings' &&  'bg-primary text-white shadow-lg rounded-full'}` } to={'/account/bookings'}>My Bookings</Link>
        <Link className={`py-2 px-4 hover:rounded-full hover:shadow-lg ${location == '/account/places' &&  'bg-primary text-white shadow-lg rounded-full'}` } to={'/account/places'}>My Places</Link>
      </nav>
      <div className='mt-10'>
        {
          location == '/account' && 
          <div className='w-full flex flex-col text-center justify-center items-center font-raleway'>
            <span>
              Logged in as
              <strong className='ml-2 tracking-wider'>{user.username}</strong>
            </span>
            <button onClick={logout} type='button' className='bg-primary text-white max-w-sm px-6 py-2 rounded-full mt-5 shadow-lg'>Logout</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Account