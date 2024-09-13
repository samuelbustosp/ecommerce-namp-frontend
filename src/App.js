import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AdminLayout from './layout/admin/AdminLayout';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout/>}>
            <Route path="dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

