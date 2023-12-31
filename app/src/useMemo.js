import React, { useMemo, useState } from "react";
import useFetch from "./useFetch";
const url = "https://api.github.com/users";
 

const trovaMaggiore = (array) => {
  console.log("trovo maggiore");
  return array.reduce((total, item) => {
    if (item.id > total) {
      total = item.id;
    }
    return total;
  }, 0);
};
const Memo = () => {
  const { data } = useFetch(url);
  const [contatore, setContatore] = useState(0);

  /**
   * Tiene Traccia del valore returnato da trovaMaggiore
   * Fino a quando data non Varia, restituisce sempre quel valore
   * invece di eseguire nuovamente la funzione
   * ogni volta che viene aggiornata data allora viene eseguita la funzione trovaMaggiore
   * 
   * useMemo si occupa di contrllare e memorizzare un singolo valore, e solo quando si ha una variazione eseguire una serie di azioni,
   * React.memo si occupa di controllare lo stream dei valori di props.object, e quando uno di questi varie allora 
   * causa un nuovo render, quindi ci aiuta a non avere render non necessari 
   */
  useMemo(() => trovaMaggiore(data), [data]);
  return (
    <>
      <div style={{ width: "fit-content", margin: "auto" }}>
        <button
          className="btn btn-info"
          onClick={() => setContatore(contatore + 1)}
        >
          Aggiungi
        </button>
        <h4>{contatore}</h4>
      </div>
      <div style={{ width: "fit-content", margin: "auto" }}>
        {data.map((el) => {
          return <Elenco key={el.id} {...el} />;
        })}
      </div>
    </>
  );
};

/**
 * Il Componente è inserito all'interno di Memo, che controlla i valori all'interno del props
 * Se essi non variano il componente viene memorizzato e non subisce un nuovo Render
 */
const Elenco = React.memo(({ avatar_url: image, login: name }) => {
  return (
    <article className="card bg-white my-3 shadow-sm">
      <img
        src={image}
        alt={name}
        className="img my-3"
        style={{ width: "30%", borderRadius: "50%", margin: "auto" }}
      />
      <h4>{name}</h4>
    </article>
  );
});

export default Memo;
