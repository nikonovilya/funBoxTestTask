import { Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductsPage />} />
    </Routes>
    // <div className='App'>
    //   <ProductsPage />
    // </div>
  );
}

export default App;
