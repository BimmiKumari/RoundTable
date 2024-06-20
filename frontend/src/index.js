import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from "./reducer/Rootin";
import {configureStore} from "@reduxjs/toolkit"
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
const store = configureStore({
  reducer:rootReducer,
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      
    <App />
    <Toaster/>
    </Provider>
    
  </React.StrictMode>
);

reportWebVitals();
