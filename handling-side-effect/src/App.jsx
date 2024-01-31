import { useRef, useState, useEffect } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {

 const [modalIsOpen, setModalIsOpen] = useState(false)
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  /* useEffect richiede due parametri: il primo è la funzione che effettua delle modifiche, il secondo è 
    un array di dipendenze. con un array vuoto il sideEffect viene eseguito una sola volta invece che infinite
    il secondo argomento verrà eseguito dopo ogni esecuzione del componente.
    quindi prima viene montato il componente con il suo jsx, e dopo viene chiamato questo useEffect
    */
  useEffect(() => {
    //ottengo la user location
    navigator.geolocation.getCurrentPosition((position) => {
      //tutto questo codice è un effetto collaterale perchè non è direttamente collegato al rendering dell jsx,
      //soprattutto perchè non termina immediatamente
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      /* ora che abbiamo questi sortedPlaces vogliamo anche usarli per renderizzarli in ordine,
      quindi ci serve usare gli stati
      */

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  /* questo useEffect non serve perchè qui il recupero dei dati è immediato. nel primo caso invece 
  lo useEffect era necessario perchè l'operazione 
  navigator.geolocation.getCurrentPosition 
  è sincrona! 
  posso quindi tranquillamente spostare questo codice in testa, fuori dal componente

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    const storedPlaces = storedIds.map((id) => 
    AVAILABLE_PLACES.find((place) => place.id === id))

    setPickedPlaces(storedPlaces)
  })

  */

  function handleStartRemovePlace(id) {
    setModalIsOpen(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false)
  }

  //esempio di side effect
  function handleSelectPlace(id) {
    //questa prima parte prevede un cambiamento della ui
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    /*questa seconda parte no, ma anche qui avviene un side effect
    non abbiamo bisogno di inglobare questo pezzo di codice in un useEffect, e pur volendo non potremmo nemmeno 
    farlo perchè siamo all'interno di una funzione
    questo codice non entra nemmeno in un loop infinito perchè non stiamo aggiornando nessuno stato
    */

    const storeIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storeIds.indexOf(id) === -1) {
      localStorage.setItem("selectedPlaces", JSON.stringify([id, ...storeIds]));
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false)

    const storeIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storeIds.filter((id) => id !== selectedPlace.current))
    );
  }

  return (
    <>
      <Modal ref={modal} open={modalIsOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance"
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
