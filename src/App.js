import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LeftNavBar from './components/LeftNavBar';
import TopBar from './components/TopBar';

import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Product from './pages/Product';
import Upload from './pages/Upload';
import Edit from './pages/Edit';
import ChatRoom from './pages/ChatRoom';
import Login from './pages/Login';
import Join from './pages/Join';
import ChangePassword from './pages/ChangePassword';

export const CategoryStateContext = React.createContext();
export const CategorySetStateContext = React.createContext();
export const SearchStateContext = React.createContext();
export const SearchSetStateContext = React.createContext();

function App() {
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState();

  return (
    <CategoryStateContext.Provider value={category}>
      <CategorySetStateContext.Provider value={setCategory}>
        <SearchStateContext.Provider value={search}>
          <SearchSetStateContext.Provider value={setSearch}>
            <BrowserRouter>
              <div className='App'>
                <LeftNavBar />
                <TopBar />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/profile/:userId' element={<Profile />} />
                  <Route
                    path='/profile/edit/:userId'
                    element={<ProfileEdit />}
                  />
                  <Route
                    path='/profile/changePassword/:userId'
                    element={<ChangePassword />}
                  />
                  <Route path='/product/:id' element={<Product />} />
                  <Route path='/product/:id/chat' element={<ChatRoom />} />
                  <Route path='/upload' element={<Upload />} />
                  <Route path='/edit/:id' element={<Edit />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/join' element={<Join />} />
                </Routes>
              </div>
            </BrowserRouter>
          </SearchSetStateContext.Provider>
        </SearchStateContext.Provider>
      </CategorySetStateContext.Provider>
    </CategoryStateContext.Provider>
  );
}

export default App;
