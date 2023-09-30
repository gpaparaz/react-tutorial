import React, { useState } from "react";
import Gelato from "./Gelato";
import axios from "axios";
import data from "../fakeData";

const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

const Menu = () => {
  //loading state for data fetching
  const [isLoading, setLoading] = useState(true)

  //error handler
  const [isError, setIsError] = useState(false)

  //tutti i prodotti
  const [prodotti, setProdotti] = useState()

  //metodo di filtraggio, permette di dare una visualizzazione sulla sezione attiva
  const [selected, setSelected] = useState(0)
  const [filterProducts, setFilterProducts]  = useState()

  //definisco uno state per la categorie perchè all'inizio non esiste una categoria, non esistono i prodotti
  const [categorie, setCategorie] = useState([]);


  //fetch dei dati
  React.useEffect(() => {
    //questa è una funzione particolare, viene eseguita non appena viene defnita. nelle parentesi tonde sotto potrei mettere 
    //dei parametri; in questo momento non mi serve metterne e quindi la lascio vuota
    (async() => {
      setLoading(true)
      setIsError(false)
      try {
        const response = await axios.get(url)
        setProdotti(response.data.data)
        setFilterProducts(response.data.data);
        
        //Ottengo Array di elementi non ripetibili
        const nuoveCategorie = Array.from(
          new Set(response.data.data.map((el) => el.categoria))
          );
          
        //Aggiungo all'inizio termine all
        nuoveCategorie.unshift("all");
        setCategorie(nuoveCategorie);
        
        setLoading(false)
        setIsError(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setIsError(true)
      }
    })()
  },[])

  const filterProdotti = (categoria, index) => {
    setSelected(index)
    if(categoria === 'all'){
      setFilterProducts(prodotti)
    }
    else {
      const prodottiFiltrati = prodotti.filter((el) =>
        el.categoria === categoria ? el : ""
      );
      setFilterProducts(prodottiFiltrati);
    }
  }

  return( <div className="container">
    <h4 style={{textAlign:'center', textTransform:'uppercase'}}>
      Le nostre scelte
    </h4>
    {
      !isLoading && !isError ? 
      <>     
    
        <div className="lista-categorie">
        {
          categorie.map( (categoria, index) => {
            return <button 
            onClick={() => filterProdotti(categoria, index)}
            key={index} className={`btn btn-selector ${index === selected && 'active'}`}>{categoria}</button>
          })
        }
        </div>
        <div>
          {filterProducts.map(el => <Gelato key={el} {...el} />)}
        </div>
      </>
      :
      <>
        <h2>Loading</h2>
      </> 
    }
  </div>);
};

export default Menu;
