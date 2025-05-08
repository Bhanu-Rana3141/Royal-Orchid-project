import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import OTP from './components/OTP';
import SocialEvents from './components/SocialEvents';
import CurateEvent from './components/CurateEvent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/otp' element={<OTP/>}></Route>
        <Route path='/social-events' element={<SocialEvents/>}></Route>
        <Route path='/curate-events' element={<CurateEvent/>}></Route>
      </Routes>
    </>
  );
}

export default App;