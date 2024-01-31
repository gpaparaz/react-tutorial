import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  //tramite il fetch stiamo facendo una promise che tornerà valori diversi in base allo stato della promise
  /* potrei fare una cosa tipo 
  const places = await fetch('....') 
  però per fare ciò avrei bisogno che la funzione AvailablePlaces sia async, e ciò non è permesso con 
  i componenti di react 
  tramite useEffect questa chiamata api verrà eseguita una sola volta, tramite l'array vuoto come dipendenza
  verrà eseguita una sola volta
  */

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false)
    }

    fetchPlaces();
  }, []);

  console.log(availablePlaces);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading = {isFetching}
      loadingText = "Fetching data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
