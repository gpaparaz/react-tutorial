import React, { useState } from "react";

const ErroreBase = () => {
const [titolo, setTitolo] = useState('Hello World');
const cambiaTitolo = () => {
    setTitolo('nuovo titolo')
}
  return (
    <React.Fragment>
      <h2> {titolo} </h2>
      <button
        type="button"
        className="btn btn-info my-3"
        onClick={cambiaTitolo}
      >
        Change Me
      </button>
    </React.Fragment>
  );
};

export default ErroreBase;
