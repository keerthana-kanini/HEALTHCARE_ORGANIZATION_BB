import React from 'react';
import { Home } from './Models/Home';
import Doctor from './Models/Doctor';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/doctor">Doctor</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
