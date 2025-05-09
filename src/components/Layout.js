import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import OTP from '../pages/OTP';
import SocialEvents from '../pages/SocialEvents';
import CurateEvent from '../pages/CurateEvent';

const Layout = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/otp' element={<OTP />} />
            <Route path='/social-events' element={<SocialEvents />} />
            <Route path='/curate-events' element={<CurateEvent />} />
        </Routes>
    );
};

export default Layout;
