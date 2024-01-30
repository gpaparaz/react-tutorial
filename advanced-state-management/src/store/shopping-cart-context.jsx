import { createContext, useReducer, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
  //dichiarare items vuoto di default permette di inizializzarlo e semplifica la vita per l'accesso a questo oggetto
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

//definisco questa funzione esternamente a CartContextProvider perchè non deve essere 
//ricreata ogni volta che la funzione componente viene eseguita, inoltre non avrà bisogno di 
//accedere a oggetti di scena o altro
function shoppingCartReducer(state, action) {


    //si restituisce lo stato aggiornato
    return state;
}

//si occupa di gestire i dati di contesto e fornirli. tratterà il contesto relativo al carrello
export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  /* invece di usare funzioni complesse che gestiscono gli stati uso un reducer.
  un reducer è una funzione che riduce uno o più valori complessi ad una semplice, ad esempio 
  un array di numeri in un numero semplice. 
  in un componente react posso eseguire useReducer come un qualunque hook. 
  fornirà un array di due elementi, esattamente come useState; il primo elemento sarà eseguito 
  da useReducer, e il secondo valore non sarà una funzione di aggiornamento stato, bensì un dispatch.
  il dispatch invia delle azioni che saranno gestita da una funzione riduttore
  */

  const [shoppingCartState, shoppingCartDispatch ] = useReducer(shoppingCartReducer, {
    items: [],
  });



  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  //qualsiasi componente wrappato all'interno di context può avere accesso a questi valori
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
