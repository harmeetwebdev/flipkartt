
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screen/HomeScreen ';
import ProductScreen from './screen/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to='/'>flipkart
            <br />
            <strong>plus<span>+</span> </strong>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:slug' element={<ProductScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
