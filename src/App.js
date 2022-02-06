import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import AddTour from './Components/Dashboard/AddTour/AddTour';
import AdminMake from './Components/Dashboard/Admin/AdminMake/AdminMake';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import DashboardMain from './Components/Dashboard/Dashboard/DashboardMain';
import ManageTours from './Components/Dashboard/ManageTour/ManageTours/ManageTours';
import AboutUs from './Components/Pages/AboutUs/AboutUs/AboutUs';
import BestPackages from './Components/Pages/BestPackages/BestPackages/BestPackages';
import Blogs from './Components/Pages/Bloges/Blogs/Blogs';
import ContactUs from './Components/Pages/ContactUs/ContactUs/ContactUs';
import Destination from './Components/Pages/Destination/Destination/Destination';
import Booking from './Components/Pages/EventBook/Booking/Booking';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/LogIn/Login/Login';
import Register from './Components/Pages/LogIn/Register';
import NotFound from './Components/Pages/NotFound/NotFound';
import TravelList from './Components/Pages/TravelList/TravelList/TravelList';
import TravelPerfection from './Components/Pages/TravelPerfection/TravelPerfection/TravelPerfection';
import AdminRoute from './Components/Shared/AdminRoute/AdminRoute';
import PrivetRoute from './Components/Shared/PrivateRoute/PrivateRoute';

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
        <Route path="travelList" element={<TravelList />} />
        <Route path="products/:id" element={<PrivetRoute><Booking /></PrivetRoute>} />
        {/* Dashboard */}
        <Route path="dashboard" element={<PrivetRoute>< Dashboard /></PrivetRoute>}>
          <Route path='dashboardMain' element={<AdminRoute><DashboardMain /></AdminRoute>} />
          <Route path='adminMake' element={<AdminRoute><AdminMake /></AdminRoute>} />
          <Route path='manageTour' element={<AdminRoute><ManageTours /></AdminRoute>} />
          <Route path='addTour' element={<AdminRoute><AddTour /></AdminRoute>} />
          <Route path='adminMake' element={<AdminRoute><AdminMake /></AdminRoute>} />
        </Route>
        {/* Dashboard */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </AuthProvider>
  );
}

export default App;
