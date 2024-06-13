import './App.css';
import Layout from '../src/pages/Layout';
import Resource from '../src/components/Resource'
import Virtualtour from '../src/components/Virtualtour'
import Workshops from '../src/components/Workshops';
import Navbar from '../src/components/Navbar';
import MyBooking from '../src/components/MyBooking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Toaster} from 'react-hot-toast';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
function App() {
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
                 <Route path="/Login" element={<Login/>}></Route>
                 <Route path="/Signup" element={<Signup/>}></Route>
           </Routes>
           
           
       </BrowserRouter>
        <Toaster/>
    </div>
  );
}

export default App;
