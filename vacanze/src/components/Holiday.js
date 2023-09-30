import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  const [data, setData] = useState([])

  //il secondo state mi serve per passare l'array di oggetti
  const [selected, setSelected] = useState(0)

  //funzione per fetchare i dati
  const getData = async () => {
    try{
      const response = await axios.get(url)
      //NB: faccio faccio la riga qui sotto, sto prendendo tutto l'oggetto data restituito dall'api
      setData(response.data)
      console.log("response:")
      console.log(response)
      console.log("response.data:")
      console.log(response.data)
    }
    catch(e){
      console.log(e)
    }
  }

  //NB: con l'array inserito in fondo a useEffect sto indicato che questo fetch voglio che venga effettuato solo una volta 
  useEffect(() => {
    getData()
  },[])

  
  //return condizionale per verificare di aver risolto la promise
  if(data.success){
    return( <>
  {
    //ternary operator per controllare il numero di vacanze
    //non so perchè questo pezzo di codice non funziona
    // data.data.lenght > 0 ? <SingleHoliday {
    //   ...data.data[selected]
    // }/> : <h4>Niente vacanze</h4>
    <SingleHoliday {...data.data[selected] } />

  }
  </>)
}
else return <h2>....Loading</h2>
};

export default Holiday;
