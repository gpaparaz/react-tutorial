import React from "react";

const RefExample = () => {
  const ref = React.useRef(null);

//funzione che mi scrolla fino al punto indicato
const handleScroll = () => {
  if(!ref || !ref.current){
    return
  }
  //metodo semplice di javascript che permette di scrollare fno ad un punto
  ref.current.scrollIntoView({behavior: "smooth", block:"center"})
}
  return (
    <>
      <h1>Use Ref</h1>
      <div
        className="my-5 mx-auto"
        style={{
          height: "100vh",
        }}
      >
        <button onClick={() => handleScroll()} className="btn btn-info">Scroll</button>
      </div>

      <div
        style={{
          height: "100vh",
        }}
      ></div>

      <h2 ref={ref}>Testo a cui puntare</h2>
      <div
        style={{
          height: "30vh",
        }}
      ></div>
    </>
  );
};

export default RefExample;
