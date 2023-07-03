import React from 'react';
import HomePage from './Pages/HomePage';
import CategoryPage from './Pages/CategoryPage';
import ProductPage from  './Pages/ProductPage';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <>
      <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/:items' element={<CategoryPage />} />
      <Route path='/:id/:title' element={<ProductPage />} /> 
     </Routes>
      </>
    );
  }
}

export default App;



