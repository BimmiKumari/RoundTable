import './App.css';
import Layout from '../src/pages/Layout'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={Layout}></Route>
      </Routes>
      <Layout/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
