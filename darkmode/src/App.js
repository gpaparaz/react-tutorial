import logo from './logo.svg';
import './App.css';
import data from './data'
import Articolo from './articolo';
import {useState, useEffect} from 'react'


/* local storage è un sistema che permette di salvare sul browser locale delle informazioni, in questo caso 
salviamo il valore di theme. quindi prima salviamo il valore dentro local storage, e lo facciamo all'interno dello useEffect
perchè lo farà ogni volta ch cambia il valore di theme.
come ultimo passaggio il valore iniziale di state deve corrispondere a ciò che è stato allocato nello storage
e per concludere il valore iniziale passato allo useState non è più una stringa ma è ciò che troveremo nel local storage
per sicurezza comunque diamo indicazione che se non c'è un valore, allora ne prefissiamo uno noi */


const getFromLocalStorage = () => {
  //quindi se il valore non è vuoto, ritornalo
  if(localStorage.getItem('theme')){
    return localStorage.getItem('theme')
  }
  else
  return 'light-mode'
}


/* con spread operator passo ogni singolo elemento di data ad articolo*/

function App() {
  const [theme, setTheme] = useState(getFromLocalStorage() || 'light-mode')

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
    
    //il primo parametro è il nome che voglio associare alla chiave, e il secondo è ciò che effettivamente passiamo, e deve essere una stringa
    localStorage.setItem('theme', theme)
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
