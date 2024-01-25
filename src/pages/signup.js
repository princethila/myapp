
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import userData from '.././data/data';

const  SignUp  = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardnumber, setCardnumber] = useState('000009876');
    const [bankcardnumber, setBankCardnumber] = useState('');
    const [expirydate, setExpirydate] = useState('');
    const [balance, setBalance] = useState(0);
    const [loginMessage, setLoginMessage] = useState('');


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };

    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

    const handleCvvChange = (event) => {
        setCvv(event.target.value);
      };
    
    const handleCardNumberChange = (event) => {
        setBankCardnumber(event.target.value);
      };
    
    const handleExpiryDateChange = (event) => {
        setExpirydate(event.target.value);
      };

    const handleSignup = () => {
        // Check if the username already exists
        const userExists = userData.some((user) => user.username === username);
    
        if (userExists) {
          // User already exists
          setLoginMessage('Username already exists. Please choose another.');
        } else {
        const cvvnum = cvv;
        const expirynum = expirydate;
        const bankcardnum = bankcardnumber;
        const cardnum = cardnumber;
        const balancenum = balance;
        const namenum = name;
          // Add the new user to the data (assuming you have a function to add users)
          // For simplicity, this example assumes userData is a mutable array
          userData.push({ username, password });
          setLoginMessage('Hold tight, we are signing you up...');
          navigate('../auth',{state:{username:username, cvv:cvvnum, expirydate:expirynum, cardnumber:cardnum, balance:balancenum, name:namenum, bankcardnumber:bankcardnum}})
        }
      };

    return(
        <div>
            <header className='pl-6 py-12 md:py-6 font-bold text-xl border-b-0 border-black bg-gradient-to-r from-blue-900 from-20%  via-red-500  to-white'>
                <p className='text-white'>BusTag Connect 🎟️</p>
            </header>
            
            <div className='bg-gray-200 rounded-2xl py-6 mt-12 mx-4 md:mt-12 md:mx-96 border-2 border-black h-full'>
                <div>
                  <h2 className='text-center text-xl font-bold leading-9'>Sign up</h2>
                </div>
                <div>
                    <h2 className='pl-8 pt-4 text-sm font-bold'>Account details</h2>
                </div>
                <div className='space-y-2 px-8'>
                <div >
                      <label className='text-gray-900 text-sm'>Name</label>
                      <div>
                        <input className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="text" value={name} onChange={handleNameChange} />
                      </div>
                  </div>
                  <div >
                      <label className='text-gray-900 text-sm'>Username</label>
                      <div>
                        <input className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="text" value={username} onChange={handleUsernameChange} />
                      </div>
                  </div>
                  <div className=''>
                      <label className=' text-gray-900 text-sm'>Password</label>
                      <div>
                        <input className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="password" value={password} onChange={handlePasswordChange} />
                      </div>
                      
                  </div>
                  <div>
                    <h2 className='pt-4 text-sm font-bold'>Card details</h2>
                </div>
                  <div >
                      <label className='text-gray-900 text-sm'>Expiry date</label>
                      <div>
                        <input className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="date" placeholder="yyyy/mm/dd" value={expirydate} onChange={handleExpiryDateChange} />
                      </div>
                  </div>
                  <div className=''>
                      <label className=' text-gray-900 text-sm'>Card number</label>
                      <div>
                        <input className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="text" value={bankcardnumber} onChange={handleCardNumberChange} />
                      </div>
                      
                  </div>
                  <div className=''>
                      <label className=' text-gray-900 text-sm'>CVV</label>
                      <div>
                        <input className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="text" value={cvv} onChange={handleCvvChange} />
                      </div>
                      
                  </div>
                  
                  <div className='flex flex-col space-x-2 pt-2'>
                      <button className='flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black' onClick={handleSignup}>Signup</button>
                      {/* <button className='flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black' onClick={handleSignup}>Signup</button> */}
                  </div>
                  
                  {/* <p className='text-red-500 text-center'>{loginMessage}</p>  */}
                </div>
                
              </div>
            
        </div>
        
    )
}

export default SignUp;