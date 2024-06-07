import './App.css';
import Layout from '../src/pages/Layout';
import Footer from '../src/components/Footer';
import Resource from '../src/components/Resource'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <BrowserRouter>
           <Routes>
                 <Route path="/Home" element={Layout}></Route>
                 <Route path="/Resource" element={Resource}></Route>
                 <Route path="/Pricing" element={Resource}></Route>
                 <Route path="/Customer" element={Resource}></Route>
          
           </Routes>
           <Layout/>
           <Footer/>
       </BrowserRouter>
        
    </div>
  );
}

export default App;
