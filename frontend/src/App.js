import './App.css';
import Layout from '../src/pages/Layout';
import Footer from '../src/components/Footer';
import Resource from '../src/components/Resource'
import Pricing from '../src/components/Pricing'
import  Customer from '../src/components/Customer';
import Navbar from '../src/components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
      
       <Layout/>
           <Routes>
                 <Route path="/Home" element={<Layout/>}></Route>
                 <Route path="/Resource" element={<Resource/>}></Route>
                 <Route path="/Pricing" element={<Pricing/>}></Route>
                 <Route path="/Customer" element={<Customer/>}></Route>
          
           </Routes>
           
           <Footer/>
       </BrowserRouter>
        
    </div>
  );
}

export default App;
