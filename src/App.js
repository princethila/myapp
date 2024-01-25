
import './App.css';
import userData from './data/data';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Auth from "./pages/auth";
import SignUp from "./pages/signup";
import Home from './pages';

function App() {
  return (

    <Router>
      <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </Router> 
    // <div className="bg-black">
    //     <div className='text-blue'>
    //       {userData[0].username}
    //     </div>
    // </div>
  );
}

export default App;
