import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import AboutUs from './Components/Pages/AboutUs/AboutUs/AboutUs';
import BestPackages from './Components/Pages/BestPackages/BestPackages/BestPackages';
import Blogs from './Components/Pages/Bloges/Blogs/Blogs';
import ContactUs from './Components/Pages/ContactUs/ContactUs/ContactUs';
import Destination from './Components/Pages/Destination/Destination/Destination';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/LogIn/Login/Login';
import Register from './Components/Pages/LogIn/Register';
import NotFound from './Components/Pages/NotFound/NotFound';
import TravelPerfection from './Components/Pages/TravelPerfection/TravelPerfection/TravelPerfection';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="Destination" element={<Destination />} />
        <Route path="BestPack" element={<BestPackages />} />
        <Route path="TourPackages" element={<TravelPerfection />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="Blog" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </AuthProvider>
  );
}

export default App;
