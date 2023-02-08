import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import NavBar from './NavBar';
import Contact from './Contact';
import Pizza from './Pizza';
import Paste from './Paste';
import Bauturi from './Bauturi';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux/es/exports';
import { store } from './redux-store/store';
import './index.scss';
import ShoppingCart from './ShoppingCart';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
  <Router>
    <ToastContainer/>
    <NavBar />

    <Routes>

      <Route path="/" element={<Main />} />
      <Route path="/pizza" element={<Pizza />} />
      <Route path="/paste" element={<Paste />} />
      <Route path="/bauturi" element={<Bauturi />} />
      <Route path="/shoppingcart" element={<ShoppingCart />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

  </Router>
  </Provider>
);
