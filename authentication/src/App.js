import React from 'react';
import Home from './Routes/Home';
import Login from './Routes/Login';
import Dashboard from './Routes/Dashboard';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Dashboard" element={<Dashboard/>}/>
</Routes>
    </div>
  );
}

export default App;
