import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Item from './pages/Item';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import AdminLogin from './components/AdminLogin';
import AdminAdd from './pages/AdminAdd';
import AdminList from './pages/AdminList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const LayoutWithNavbar = () => (
  <>
    <Navbar />
    <Outlet /> 
  </>
);

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        {/* Admin routes without Navbar */}
        <Route path='/admin/add' element={<AdminAdd />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/list' element={<AdminList />} />

        {/* Routes with Navbar */}
        <Route element={<LayoutWithNavbar />}>
          <Route path='/' element={<Home />} /> {/* Home route */}
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<Item />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
