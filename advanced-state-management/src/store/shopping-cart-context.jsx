import { createContext } from "react";

export const CartContext = createContext({
    //dichiarare items vuoto di default permette di inizializzarlo e semplifica la vita per l'accesso a questo oggetto
    items: [],
    addItemToCart: () => {}
});

