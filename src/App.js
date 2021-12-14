import React, { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import ProductList from './pages/Products/containers/ProductList';
import Cart from './pages/Cart/containers/Cart';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <Navbar 
        setShowCart={() => setShowCart(!showCart)} />
      <ProductList />
      {showCart && <Cart />}
    </div>
  );
}

export default App;
