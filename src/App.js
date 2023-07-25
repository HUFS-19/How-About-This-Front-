import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LeftNavBar from "./components/LeftNavBar";
import TopBar from "./components/TopBar";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LeftNavBar />
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
