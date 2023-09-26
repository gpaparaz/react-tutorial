import React, {useState} from "react";
import {data} from './data'

const ArrayState = () => {
  const [people, setPeople] = useState(data)
  
  const removeItem = (id) => {
    //people è il nostro state
    let newPeople = people.filter( el => el.id !== id)
    setPeople(newPeople)
  }
  
  return (
    <>
{people.map( el => {
  const {id, name} = el;
  return(
    <div key={id} className="item shadow">
        <h5>{name}</h5>
        <button onClick={() => removeItem(el.id)} type="button" className="btn btn-primary">click me</button>
    </div>
  )
})    }
</>
  );
};

export default ArrayState;
