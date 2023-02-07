import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'

 import { toast } from 'react-toastify';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    if(username === "" || email === "" || password === ""){
      toast.error('Must fill all the fields.');
    } else {
      try {
        await axios.post('/register', {
          username,
          email,
          password
        });
        toast.success('Registration successful. Now you can log in.');
      } catch (e) {
        toast.error('Registration failed, Please try again later.')
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
        <form className='max-w-md mx-auto px-2' onSubmit={registerUser}>
            <input 
              className='font-raleway placeholder:font-raleway' 
              type="text" 
              name="username" 
              id="username" 
              placeholder='User name'
              value={username}
              onInput={e => setUsername(e.target.value)}
            />
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
                Register
            </button>
            <div className='group text-center font-raleway py-2 flex justify-center gap-2 text-gray-500'>
                Already have an account?
                <Link to={'/login'} className="text-black group-hover:text-[#FF385C] group-hover:underline transition-all">
                    Login now
                </Link>
            </div>
        </form>
    </div>
  )
}

export default Register