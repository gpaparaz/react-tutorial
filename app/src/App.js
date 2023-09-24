import logo from './logo.svg';
import './App.css';
import Product from './Product';

function App() {
  const primaCard = {
    nome: 'Card Amazon',
    prezzo: '14.00',
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  };

  const secondaCard = {
    nome: 'Card Ebay',
    prezzo: '13.50',
    img: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }


  return (
    <div className="App">
      <h2>la nostra prima card</h2>
      <div className='content'>
      <Product nome={primaCard.nome} prezzo={primaCard.prezzo} img={primaCard.img}/>
      <Product nome={secondaCard.nome} prezzo={secondaCard.prezzo} img={secondaCard.img} />
      </div>
    </div>
  );
}

export default App;
