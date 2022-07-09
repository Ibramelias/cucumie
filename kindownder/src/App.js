import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import LottieAnimi from "./lotties/LottieAnimation";
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn'
import Home from './pages/home/Home';
import './App.css';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, [])

  return (
    <>
      {loading ? <LottieAnimi /> :
        <div className=''>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/profile" element={<Home />} />
          </Routes>
        </div>
      }
    </>
  );
}
export default App;
