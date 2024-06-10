import './App.css';
import Layout from '../src/pages/Layout';
import Resource from '../src/components/Resource'
import Instructor from '../src/components/Instructor'
import Workshops from '../src/components/Workshops';
import Navbar from '../src/components/Navbar';
import MyBooking from '../src/components/MyBooking'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
      
       <Navbar/>
           <Routes>
                 <Route path="/" element={<Layout/>}></Route>
                 <Route path="/Resource" element={<Resource/>}></Route>
                 <Route path="/Ourinstructor" element={<Instructor/>}></Route>
                 <Route path="/Workshops" element={<Workshops/>}></Route>
                 <Route path="/MyBooking" element={<MyBooking/>}></Route>
           </Routes>
           
           
       </BrowserRouter>
        
    </div>
  );
}

export default App;
