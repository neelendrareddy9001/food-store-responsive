import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, CreateRoutesFromElement, createRoutesFromElements, Route, RouteProvider, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import NewProduct from './components/NewProduct';
import Signup from './components/Signup';
import { store } from './redux';
import {Provider, provider} from 'react-redux';


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home/>} />
      <Route path='menu' element={<Menu/>}/>
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='login' element={<Login/>} />
      <Route path='newproduct' element={<NewProduct/>} />
      <Route path='signup' element={<Signup/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

