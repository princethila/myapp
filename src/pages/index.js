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
          setLoginMessage('Invalid username or password');
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
        <div className='p-6 w-1/2'>
            <div className=''>
                <label className='text-gray-400 text-sm'>Username:</label>
                <input className='border-2' type="text" value={username} onChange={handleUsernameChange} />
            </div>
            <div className=''>
                <label className=' text-gray-400 text-sm'>Password:</label>
                <input className='border-2' type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className='flex flex-col'>
                <button className='bg-black py-2 px-4 my-2 rounded-lg text-white w-min' onClick={handleLogin}>Login</button>
                <button className='bg-black py-2 px-4 rounded-lg text-white w-min' onClick={handleSignup}>Signup</button>
            </div>
            
            <p>{loginMessage}</p>
            
        </div>
    )
}

export default Home;