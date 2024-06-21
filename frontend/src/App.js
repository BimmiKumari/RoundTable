import './App.css';
import VerifyEmail from "./components/VerifyEmail";
import Footer from '../src/components/Footer'
import Layout from '../src/pages/Layout';
import Resource from '../src/components/Resource'
import Virtualtour from '../src/components/Virtualtour'
import Workshops from '../src/components/Workshops';
import Navbar from '../src/components/Navbar';
import MyBooking from '../src/components/MyBooking';
import OpenRoute from '../src/Services/OpenRoute';
import PrivateRoute from '../src/Services/PrivateRoute';
import Login from './pages/Login';
import { ACCOUNT_TYPE } from "./utils/constants";
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup';
import UpdatePassword from './pages/UpdatePassword'
import { useDispatch, useSelector } from "react-redux";
import {Toaster} from 'react-hot-toast';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword'
import MyProfile from "./components/profile/MyProfile";
function App() {
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.profile)
  
  return (
    <div className="App">
      
       <BrowserRouter>
      
       <Navbar/>
           <Routes>
                 <Route path="/" element={<Layout/>}></Route>
                 <Route path="/Resource" element={<Resource/>}></Route>
                 <Route path="/OurVirtualtour" element={<Virtualtour/>}></Route>
                 <Route path="/Workshops" element={<Workshops/>}></Route>
                 <Route path="/MyBooking" element={<MyBooking/>}></Route>
                 <Route path="/login" element={<Login  />}></Route>
                 <Route path="/signup" element={<Signup />}></Route>
                 <Route path="verify-email" element={ <VerifyEmail /> }></Route>
                 <Route path="forgot-password"  element={  <ForgotPassword /> } />  
                 <Route path="update-password/:id" element={<UpdatePassword />} />  
                 <Route path="dashboard/my-profile" element={<MyProfile />} />
                 {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Layout/>} />
          <Route path="dashboard/enrolled-courses" element={<Layout/>} />
          </>
        )
      }
                 
                 <Route 
      element={
        
          <Dashboard />
        
      }
    ></Route>

           </Routes>
           
           
       </BrowserRouter>
       <Footer/>
        <Toaster/>
    </div>
  );
}

export default App;
