import axios from 'axios';
import React, {useContext, useState} from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { UserContext } from '../context/UserContext';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    if(email === "" || password === "" ){
      toast.error('Must fill all the fields.');
    }else {
      try {
        let res = await axios.post('/login', {
          email,
          password
        });
        toast.success(res.data.message);
        setUser(res.data.data);
        navigate('/');
      } catch (e) {
        toast.error(e.response.data.message)
      }
    }
  }

  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center'>
        <Link to={'/'} className='flex items-center gap-1 justify-center'>
          <FaPaperPlane className='h-12 w-12 rotate-6'/>
          <span className="font-dancing font-extrabold text-3xl">
            Havenly
          </span>
        </Link>
        <form className='max-w-md mx-auto px-2' onSubmit={handleLogin}>
            <input 
              className='font-raleway placeholder:font-raleway' 
              type="email" 
              name="email" 
              id="email" 
              placeholder='Email'
              value={email}
              onInput={e => setEmail(e.target.value)}
            />
            <input 
              className='font-raleway placeholder:font-raleway' 
              type="password" 
              name="password" 
              id="password" 
              placeholder='Password' 
              value={password}
              onInput={e => setPassword(e.target.value)}
            />
            <button className='bg-primary w-full rounded-xl py-2 text-white font-raleway mt-2'>
                Login
            </button>
            <div className='group text-center font-raleway py-2 flex justify-center gap-2 text-gray-500'>
                Don't have an account yet?
                <Link to={'/register'} className="text-black group-hover:text-[#FF385C] group-hover:underline transition-all">
                    Register now
                </Link>
            </div>
        </form>
    </div>
  )
}

export default Login