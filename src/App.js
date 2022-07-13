
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Header from './shared/Header/Header'
import RequireAuth from './user/RequireAuth'
import Reviews from './pages/Reviews/Reviews'
import ContactUs from './pages/Home/ContactUs/ContactUs'
import LogIn from './user/LogIn/LogIn'
import Footer from './Footer/Footer';
import MakeAppointment from './pages/MakeAppointment/MakeAppointment';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './user/Register';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './user/LogIn/RequireAdmin';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="makeAppointment" element={<RequireAuth><MakeAppointment /></RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="myreview" element={<MyReview></MyReview>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path="reviews" element={<Reviews />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
