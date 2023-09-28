import React from "react";
import PropTypes from "prop-types";
import { datiIncompleti } from "./data";
const defaultImage =
  "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg";

const PropComponent = () => {
  return (
    <div>
      {datiIncompleti.map((el) => (
        <Prodotto key={el.id} {...el} />
      ))}
    </div>
  );
};

const Prodotto = ({ nome, image, prezzo }) => {

  const img = image && image.url;

  return (
    <article className="card shadow my-3 p-2">
      <div className="card-body">
        <img
          src={img || defaultImage}
          alt={nome || "divano default"}
          className="card-img-top"
        />
        <div className="card-text">
          <h4 className="card-title">{nome || "divano default"}</h4>
          <p className="card-subtitle">€ {prezzo || 7.99}</p>
        </div>
      </div>
    </article>
  );
};

//inserisco dei valori di default tramite proptipes per evitare che l'applicazione crashi
//se non li usassi avrei l'errore in console che mi segnala che dei dati mancano
Prodotto.propTypes = {
  nome: PropTypes.string.isRequired,
  prezzo: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

Prodotto.defaultProps = {
  nome: "divano default",
  prezzo: 17.99,
};

export default PropComponent;
