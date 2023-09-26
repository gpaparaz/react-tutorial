import React, { useState } from "react";

const StateObject = () => {

  //NB: con questa soluzione sono costretta a chiamare due funzioni per cambiare lo stato di queste cose
  // const [name, setName] = useState('dario');
  // const [age, setAge] = useState(24);
  // const [saluto, setSaluto] = useState('ciao');

  // const cambiaSaluto = () => {
  //   setSaluto('saluto cambiato, compleanno:')
  //   setAge(25);
  // }
  const [persone, setPerson] = useState({
    name:'dario', age:'24', saluto:'saluto iniziale'
  })

  const cambiaSaluto = () => {
    setPerson({
      // importantissimo inserire il precedente state del nostro oggetto in modo tale che faccia una copia di tutit i valori per poi decidere cosa vuole modificare
      ...persone,
      age:'25',
      saluto:'nuovo saluto, compie gli anni'})
  }

  return (
    <div className="item shadow">
      <div className="text-left"> 
        <h5>
          {persone.name}
        </h5>
        <h5>
          {persone.age}
        </h5>
        <h6>
          {persone.saluto}
        </h6>
        <button onClick={() => cambiaSaluto()}>Cambia il saluto </button>
      </div>
    </div>
  )
  
};

export default StateObject;
