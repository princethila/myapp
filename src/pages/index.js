//import {Authservice} from '.././components/authservice.js'
import React, { useState } from 'react';
import userData from '.././data/data';
import { useNavigate } from "react-router-dom"


const  Home  = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const [loggedin, setLoggedin] = useState(false)


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleLogin = () => {
        // Validate the credentials
        const usern = username;
        const user = userData.find((user) => user.username === username && user.password === password);
    
        if (user) {
          // Successful login
          setLoggedin(true)
          setLoginMessage('Login successful!');
          navigate('./auth',{state:usern})
          // You can perform additional actions here, such as redirecting the user or setting up a session
        } else {
          // Failed login
          setLoginMessage('Invalid username or password. Want to sign up maybe?');
        }
      };

      const handleSignup = () => {
        // Check if the username already exists
        const userExists = userData.some((user) => user.username === username);
    
        if (userExists) {
          // User already exists
          setLoginMessage('Username already exists. Please choose another.');
        } else {
          // Add the new user to the data (assuming you have a function to add users)
          // For simplicity, this example assumes userData is a mutable array
          userData.push({ username, password });
          setLoginMessage('Signup successful! You can now login.');
        }
      };
    return (
      <>
        <header className='pl-6 py-12 md:py-6 font-bold text-xl border-b-0 border-black bg-gradient-to-r from-blue-900 from-20%  via-red-500  to-white'>
          <p className='text-white'>BusTag Connect 🎟️</p>
        </header>
        <body className='md:flex md:flex-auto p-6'>
            <div className='md:w-1/2'>
              <p className='md:px-12 pt-12 md:pt-44 font-extrabold text-4xl md:text-6xl font-sans text-blue-950'>Top up your Rea Vaya bus tag in  <span className='text-red-500'>less than 5 minutes</span> , easy!</p>
              <p className='md:px-12 pt-4'>Bypass lengthy queues and top up your bus tag hassle free. Try our service and stay up to date with all information pertaining to your daily commute.</p>
            </div>
            <div className='md:w-1/2 content-center pt-16 md:pt-28 flex min-h-full flex-col justify-center'>
              <div className='bg-gray-200 rounded-2xl py-12 md:p-20 md:mx-8 border-2 border-black h-full'>
                <div>
                  <h2 className='text-center text-2xl font-bold leading-9'>Sign in to your account</h2>
                </div>
                <div className='space-y-4 px-8'>
                  <div >
                      <label className='text-gray-900 text-sm'>Username</label>
                      <div>
                        <input className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="text" value={username} onChange={handleUsernameChange} />
                      </div>
                  </div>
                  <div className=''>
                      <label className=' text-gray-900 text-sm'>Password</label>
                      <div>
                        <input className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="password" value={password} onChange={handlePasswordChange} />
                      </div>
                      
                  </div>
                  <div className='flex flex-row space-x-2'>
                      <button className='flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black' onClick={handleLogin}>Login</button>
                      <button className='flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black' onClick={handleSignup}>Signup</button>
                  </div>
                  
                  <p className='text-red-500 text-center'>{loginMessage}</p> 
                </div>
                
              </div>
                
            </div>
        </body>
          
      </>
        
    )
}

export default Home;