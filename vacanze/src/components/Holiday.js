import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  const [data, setData] = useState([])

  //funzione per fetchare i dati
  const getData = async () => {
    try{
      const response = await axios.get(url)
      //NB: faccio faccio la riga qui sotto, sto prendendo tutto l'oggetto data restituito dall'api
      setData(response.data)
      console.log(response)
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
  return <div>Vacanza</div>;
}
else return <h2>....Loading</h2>
};

export default Holiday;
