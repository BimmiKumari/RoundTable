import './App.css';
import VerifyEmail from "./components/VerifyEmail";
import Footer from '../src/components/Footer'
import Layout from '../src/pages/Layout';
import Resource from '../src/components/Resource'
import Virtualtour from '../src/components/Virtualtour'
import Workshops from '../src/components/Workshops';
import Navbar from '../src/components/Navbar';
import MyBooking from '../src/components/MyBooking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useDispatch, useSelector } from "react-redux";
import {Toaster} from 'react-hot-toast';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


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
                 <Route path="verify-email" element={
                          
                                 <VerifyEmail />
                           }></Route>
          
           </Routes>
           
           
       </BrowserRouter>
       <Footer/>
        <Toaster/>
    </div>
  );
}

export default App;
