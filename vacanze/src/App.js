import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Holiday from './components/Holiday';

function App() {
  return (
    <div className="App">
     <div className='container'>
      <Title text='Le nostre vacanze'/>
      <Holiday/>

     </div>
    </div>
  );
}

export default App;
