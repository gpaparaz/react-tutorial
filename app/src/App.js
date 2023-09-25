import logo from './logo.svg';
import './App.css';
import Product from './Product';
import products from './products';
function App() {



  return (
    <div className="App">
      <h2>la nostra prima card</h2>
      <div className='content'>
      {
        products.map(product => {
          const {id} = product;
          return <Product key = {id} prodotto = {product}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
