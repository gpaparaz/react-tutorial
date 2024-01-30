import React, { useState } from "react";

/* responsible for fetch user inputs, es importo investimento iniziale ecc */

const UserInput = () => {
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
        //dynamic set property depending wich selected value
        [inputIdentifier]: newValue,
      };
    });
  }

  /* in onChange non posso fare onChange = {handleChange()} perchè passerebbe un oggetto evento predefinito
    generato automaticamente da React, e sarebbe solo un parametro invece che due.
    per risolvere uso una funzione anonima 
    */

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inizial investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>

        <p>
          <label>Duration investment</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
