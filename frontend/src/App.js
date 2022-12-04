
import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screen/HomeScreen ';
import ProductScreen from './screen/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex  flex-column site-container'>
        <header>
          <Link to="/">
            flipkart
            <br />
            <strong>plus<span>+</span> </strong>
          </Link>
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/product/:slug' element={<ProductScreen />} />
            </Routes>
          </Container>
          <footer>
            <div className='text-center'>
              All Rights Reserved
            </div>
          </footer>
        </main>
      </div>
    </BrowserRouter >
  );
}

export default App;
