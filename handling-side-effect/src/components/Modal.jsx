import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children }) {
  const dialog = useRef();

  /* questa cosa non funziona perchè stiamo chiamando questi metodi all'interno della funzione del componente
  e stiamo usando ref per interagire con la finestra di dialogo. ma la prima volta che questo codice 
  viene eseguito la reference non è stata impostata, perchè il codice jsx di sotto non è stato ancora eseguito
  quindi la connessione tra il componente e il resto non è stata effettuata. 
  questo implica che si debba usare useEffect perchè sincronizza i valori di prop o di stato con le API
  del DOM, perchè useEffect verrà eseguita dopo la costruzione del componente e non contemporaneamente.
  questo codice è un effetto collaterale perchè ha un impatto sulla UI. non è direttamente collegato al 
  ciclo di creazione degli oggetti.

  if(open){
    dialog.current.showModal()
  }
  else {
    dialog.current.close()
  }

  */

  useEffect(() => {
    if(open){
      dialog.current.showModal()
    }
    else {
      dialog.current.close()
    }
  }, [open]);

  /* le dipendenze di questo useEffect sono i valori di prop, e noi abbiamo necessità
  che questo codice venga eseguito ogni volta che il prop cambia.
  un array vuoto non va bene perchè non va bene perchè non imposta la dipendenza */

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
