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
    console.log(state);
    const username = state;
    console.log("This is the user",{username});

    const currentuser = userData.filter(((user) => user.username === username))
    const [balance, setBalance] = useState(currentuser[0].balance);
    console.log(currentuser);

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
    
        if (user) {
          setBalance(parseInt(amount)+ parseInt(balance));
          setTransMessage('Transaction successful!');
          console.log('Transaction successful!');
          
          // You can perform additional actions here, such as redirecting the user or setting up a session
        } else {
          // Failed login
          setTransMessage('Invalid details');
          console.log('Invalid details');
        }
      };
    return (
      <>
      <header className='pl-6 pb-6 pt-6 font-bold text-xl border-b-0 border-black bg-gradient-to-r from-blue-900 from-20%  via-red-500  to-white'>
          <p className='text-white'>BusTag Connect 🎟️</p>
        </header>
      <div className="flex flex-auto p-12">
            <div className="border-2 w-2/5 mr-2 h-3/6">
                <div className='text-center font-sm font-bold'> Hi {currentuser[0].name}, welcome to your user page!</div>
                <div className='pt-4 font-bold'>Account details:</div>
                <div>Card number: {currentuser[0].card_no}</div>
                <div>Account balance: 
                    <NumericFormat value={balance} displayType={'text'} thousandSeparator={true} prefix={'R'} />
                </div>
            </div>
            <div className="border-2 w-2/5 ml-2 h-3/6">Top up
                <div className=''>
                    <label className='text-gray-950 text-sm pr-4'>Card number:</label>
                    <input className='border-2' type="text" value={cardnumber} onChange={handleCardnumberChange} />
                </div>
                <div className=''>
                    <label className=' text-gray-950 text-sm pr-4'>Expiry date:</label>
                    <input className='border-2' type="text" value={expirydate} placeholder="mm/dd/yyyy" onChange={handleExpirydateChange} />
                </div>
                <div className=''>
                    <label className=' text-gray-950 text-sm pr-4'>Cvv:</label>
                    <input className='border-2' type="text" value={cvv} onChange={handleCvvChange} />
                </div>
                <div className=''>
                    <label className=' text-gray-950 text-sm pr-4'>Amount (R):</label>
                    <input className='border-2' type="number" value={amount} onChange={handleAmountChange} />
                    <p style={{ color: 'red' }}>{errorMessage}</p>
                </div>
                <div className='flex flex-col'>
                    <button className='bg-black py-2 px-12 my-2 rounded-lg text-white w-min' onClick={handleTransaction}>Top up</button>
                    <p>{transMessage}</p>
                </div>
            
            </div>
        </div>
      </>
        
    )
}

export default Auth;