import './App.css';

import Navbar from './components/Navbar/Navbar';
import ProductList from './pages/Products/containers/ProductList';

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
