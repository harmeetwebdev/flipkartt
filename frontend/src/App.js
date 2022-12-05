
import { useContext } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screen/HomeScreen ';
import ProductScreen from './screen/ProductScreen';
import { Store } from './Store';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className='d-flex  flex-column site-container'>
        <header>
          <Navbar>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>flipkart</Navbar.Brand>
              </LinkContainer>
              <Nav className='me-auto'>
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>

        </header>
        <main>
          <Container className='mt-4  '>
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
