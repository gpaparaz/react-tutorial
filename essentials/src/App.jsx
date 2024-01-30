import { useState } from "react";
import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx"
import UserInput from "./components/UserInput.jsx"

/* voglio che i calcoli vengano effettuati nel componente results, quindi invece di gestire gli stati 
di user input dentro il componente userInput, decido di gestirli qui, in app, per poi 
passarli al componente results.
per farlo quindi necessito che tramite props la funzion handleChange venga chiamata da userInput,
passo un puntatore a questa funzione usando onChange = {handleChange} (va bene un nome qualunque,
potrebbe anche chiamarsi onChangeHandle). assieme alla funzione necessito di passare anche l'oggetto userInput*/

/* NB: in onChange={(event) =>
                onChange("initialInvestment", event.target.value)
  se passo event.target.value sto passando una stringa. ma in questo caso ho bisogno di passare 
  un numero per fare gli opportuni calcoli. quindi in newValue devo aggiungere uno + davanti per forzare
  la conversione a numero
*/ 

function App() {

    //utilizzo uno stato unico per gestire tutti e 4 gli input, dichiarando un valore iniziale
    const [userInput, setUserInput] = useState({
      initialInvestment: 1000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    });

      //gestione delle modifiche input
  function handleChange(inputIdentifier, newValue) {
    //ho bisogno di memorizzare prima lo stato precedente, perchè altrimenti gli altri valori andrebbero persi
    setUserInput((preUserInput) => {
      //ritorno una copia dello stato iniziale, e poi aggiorno il singolo dato
      return {
        ...preUserInput,
        //dynamic set property depending wich selected value. aggiungo uno + per forzare la conversione in numero
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
    <Header />
    <UserInput onChange = {handleChange} userInput = {userInput} />
    <Results input={userInput}/>
    </>
  )
}

export default App
