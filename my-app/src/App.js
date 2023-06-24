import React, { PureComponent } from 'react';
import Home from "./Pages/Home";
import CategoryPage from './Pages/CategoryPage';
import { Route, Routes } from 'react-router-dom';
 import ProductPage from './Pages/ProductPage';


class App extends PureComponent {
  render() {
    return (
      <div>
   <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="category" element={<CategoryPage/>} />
  <Route path="category/:id" element={<ProductPage/>} />
</Routes>  


     </div>
     
    )
  }
}

export default App
