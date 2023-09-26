import logo from './logo.svg';
import './App.css';
import Product from './Product';
import products from './products';
import ErroreBase from './errorebase';
import ArrayState from './useState-array';
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
      <h2>Errore base: </h2>
      <ErroreBase/>

      <h2>Array state</h2>
      <ArrayState/>
    </div>
  );
}

export default App;
