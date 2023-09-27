import logo from './logo.svg';
import './App.css';
import Product from './Product';
import products from './products';
import ErroreBase from './errorebase';
import ArrayState from './useState-array';
import StateObject from './useState.object';
import CounterComponent from './useState-contatore';
import FetchData from './useEffect-fetch';
import Hideorshowcomponent from './hideorshowcomponent';
import ControlledInput from './input-object-state';
import RefExample from './useref-example';
function App() {



  return (
    <div className="App">
      {/* <h2>la nostra prima card</h2>
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

      <h2>Object state</h2>
      <StateObject/>

      <h2>Contatore</h2>
      <CounterComponent/> */}

      {/* <FetchData/> */}

      <Hideorshowcomponent />
      <ControlledInput />
      <RefExample />
    </div>
  );
}

export default App;
