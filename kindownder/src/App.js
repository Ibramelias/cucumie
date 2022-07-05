import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage';
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp';
function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>

    </div>
    // <LogIn />
  );
}
export default App;
