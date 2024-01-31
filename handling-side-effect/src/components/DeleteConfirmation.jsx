import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  useEffect(() => { 
  const timer = setTimeout(() => {
    onConfirm();
  }, 3000);
  /* questa useEffect può restituire una funzione che verrà eseguita da React subito prima che questa 
  funzione effetto venga eseguita di nuovo, o subito prima che il componente venga smontato e rimosso 
  dal DOM. in questa funzione possiamo fermare il timeout */
  return () => {
    console.log("clean timer")
    clearTimeout(timer)
  }
},[onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
