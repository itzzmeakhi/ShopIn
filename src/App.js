import './App.css';

import Navbar from './components/Navbar/Navbar';
import ProductList from './pages/Products/containers/ProductList';
import Cart from './pages/Cart/containers/Cart';

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
