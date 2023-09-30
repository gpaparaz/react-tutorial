import logo from './logo.svg';
import './App.css';
import data from './data'
import Articolo from './articolo';
import {useState, useEffect} from 'react'


/* con spread operator passo ogni singolo elemento di data ad articolo*/

function App() {
  const [theme, setTheme] = useState('light-mode')

  //aggiungo la classe prova al tag html 
  document.documentElement.className = "prova"

  //funzione che cambia il tema in base al valore
  const cambiaTema = () => {
    if(theme === 'light-mode')
      setTheme('dark-mode')
    else 
      setTheme('light-mode')
  }

    console.log(theme)

    //quando useEffect deve modificare la classe? ogni volta che cambia il valore di theme
    //quindi ,[theme] serve a indicare che deve fare questa operazione quando cambia quel valore
  useEffect(() => {
    document.documentElement.className = theme
  },[theme])

  return (
    <>
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={cambiaTema}>
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
