
import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href='/'>flipkart
          <br />
          <strong>plus<span>+</span> </strong>
        </a>
      </header>
      <main>
        <h1>Featured product</h1>
        <div className='products'>
          {data.products.map(product => (
            <div className='product' key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className='product-info'>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>)
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
