import logo from './logo.svg';
import './App.css';
import data from './data'
import Articolo from './articolo';


/* con spread operator passo ogni singolo elemento di data ad articolo*/

function App() {
  return (
    <>
    <section className="section-center">
      <div className="container">
        <button className="btn">
          Cambia
        </button>

        <section className="article-section">
          {data.map((el) => (
            <Articolo key={el.id} {...el} />
          ))}
        </section>
      </div>
    </section>
      </>
  );
}

export default App;
