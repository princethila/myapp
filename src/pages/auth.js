import userData from '.././data/data';
import { useLocation } from "react-router-dom";
import { NumericFormat } from 'react-number-format';
import React, { useState } from 'react';


const  Auth  = () => {
    const [cardnumber, setCardnumber] = useState('');
    const [expirydate, setExpirydate] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState('');
    
    const [errorMessage, setErrorMessage] = useState('');
    const [transMessage, setTransMessage] = useState('');


    

    const { state } = useLocation(); // This one I saw in some other stackoverflow answer
    console.log("This is the state",{state});
    const username = state.username;
    const usernamename = state.nameof;
    const userbalance = state.balance;
    const usercard = state.cardnumber;
    console.log("This is the user",{username});
    
    const currentuser = userData.filter(((user) => user.username === username))
    // if (currentuser){
    //   balance = setBalance(currentuser[0].balance)
    // } else {balance = 0}
    
    console.log(currentuser);
    const [balance, setBalance] = useState(userbalance);

    const balance_left = currentuser[0].balance


    const handleCardnumberChange = (event) => {
        setCardnumber(event.target.value);
      };
    
      const handleExpirydateChange = (event) => {
        setExpirydate(event.target.value);
      };

      const handleCvvChange = (event) => {
        setCvv(event.target.value);
      };

      const handleAmountChange = (event) => {
        setAmount(event.target.value);
        const inputValue = event.target.value;
        //setBalance(inputValue+1)

        if (isNaN(inputValue) || parseInt(inputValue) <= 10) {
            setErrorMessage('Please enter an amount greater than R10.');
          } else {
            setErrorMessage('');
          }
      };


      const handleTransaction = () => {
        // Validate the details
        const user = userData.find((user) => user.bankcardnumber === cardnumber && user.expirydate === expirydate && user.cvv === cvv);
        const userval = state.username;
    
        if (user) {
          setBalance(parseInt(amount)+ parseInt(balance));
          setTransMessage('Transaction successful!');
          console.log('Transaction successful!');
          
          // You can perform additional actions here, such as redirecting the user or setting up a session
        } else if (userval){
          setBalance(parseInt(amount)+ parseInt(balance));
          setTransMessage('Transaction successful!');
          console.log('Transaction successful!');}
          else {
          // Failed login
          setTransMessage('Invalid details');
          console.log('Invalid details');
        }
      };
    return (
      <>
      <header className='pl-6 py-12 md:py-6 font-bold text-xl border-b-0 border-black bg-gradient-to-r from-blue-900 from-20%  via-red-500  to-white'>
          <p className='text-white'>BusTag Connect 🎟️</p>
        </header>
      <body className="md:flex md:flex-auto md:p-12 px-2 pt-6">
            <div className="md:w-1/2 md:mr-2 h-3/6">
                <div className='text-center text-2xl font-bold pb-12 md:text-3xl px-2'> Hi {state.name}, welcome to your user page!</div>
                
                <div className='px-4 mx-2 md:px-2 py-12 bg-blue-950 rounded-2xl'>
                  <div className='text-white text-6xl'>
                      <NumericFormat value={balance} displayType={'text'} thousandSeparator={true} prefix={'R'} />
                  </div>
                  <p className='text-gray-500'>Card no.: {usercard}</p>
                </div>
                
            </div>
            <div className='md:w-1/2 content-center pt-4 flex min-h-full flex-col justify-center'>
              <div className='bg-gray-200 rounded-2xl py-6 md:p-20 mx-2 md:mx-8 border-2 border-black h-full'>
                <div className="border-2 ml-2 h-3/6">
                  <div>
                    <h2 className='text-center text-2xl font-bold leading-9'>Top up your account</h2>
                  </div>
                  <div className='space-y-4 px-8'>
                    <div className=''>
                          <label className='text-gray-900 text-sm'>Card number</label>
                          <div>
                            <input className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="text" value={cardnumber} onChange={handleCardnumberChange} />
                          </div>
                      </div>
                      <div className=''>
                          <label className=' text-gray-900 text-sm'>Expiry date</label>
                          <div>
                            <input className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="date" value={expirydate} placeholder="yyyy/mm/dd" onChange={handleExpirydateChange} />
                          </div>
                      </div>
                      <div className=''>
                          <label className=' text-gray-900 text-sm'>CVV</label>
                          <div>
                            <input className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="text" value={cvv} onChange={handleCvvChange} />
                          </div>
                          
                      </div>
                      <div className=''>
                          <label className=' text-gray-900 text-sm'>Amount (R)</label>
                          <div>
                            <input className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6' type="number" value={amount} onChange={handleAmountChange} />
                          </div>
                          <p style={{ color: 'red' }}>{errorMessage}</p>
                      </div>
                      <div className='flex flex-col'>
                          <button className='flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black' onClick={handleTransaction}>Top up</button>
                          <p>{transMessage}</p>
                      </div>
                  </div>
                    
                
                </div>
              </div>
            </div>
            
            
        </body>
      </>
        
    )
}

export default Auth;