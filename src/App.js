import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LeftNavBar from './components/LeftNavBar';
import TopBar from './components/TopBar';

import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Product from './pages/Product';
import Login from './pages/Login';
import Join from './pages/Join';

export const CategoryStateContext = React.createContext();
export const CategorySetStateContext = React.createContext();

function App() {
  const [category, setCategory] = useState(0);

  return (
    <CategoryStateContext.Provider value={category}>
      <CategorySetStateContext.Provider value={setCategory}>
        <BrowserRouter>
          <div className='App'>
            <LeftNavBar />
            <TopBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile/:userId' element={<Profile />} />
              <Route path='/profile/edit/:userId' element={<ProfileEdit />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/login' element={<Login />} />
              <Route path='/join' element={<Join />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CategorySetStateContext.Provider>
    </CategoryStateContext.Provider>
  );
}

export default App;
