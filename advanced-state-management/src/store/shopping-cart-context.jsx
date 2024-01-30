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
    if(action.type === 'ADD_ITEM'){
     //ora qui voglio restituire uno stato che è cambiato rispetto allo snapshot

        // const updatedItems = [...prevShoppingCart.items];
        //prevShoppingCart.items è ora state.items
        const updatedItems = [...state.items];
  
        const existingCartItemIndex = updatedItems.findIndex(
        //   (cartItem) => cartItem.id === id  // l'id può essere estratto da action
        (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
  
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
          updatedItems.push({
            id: action.payload,
            name: product.title,
            price: product.price,
            quantity: 1,
          });
        }
  
        return {
            //se avessi un oggetto più complesso potrei fare prima la copia di state con ...state e poi aggiornare quello che mi serve aggiornare
          items: updatedItems,
        };
      
    }

    if(action.type === 'UPDATE_ITEM') {
        const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    }


    //si restituisce lo stato aggiornato
    return state;
}

//si occupa di gestire i dati di contesto e fornirli. tratterà il contesto relativo al carrello
export default function CartContextProvider({ children }) {
//   const [shoppingCart, setShoppingCart] = useState({
//     items: [],
//   });

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

    /* invece di avere tutta questa logica complessa voglio usare il dispatch. l'azione 
    passata può essere una stringa, un numero, ma di solito è un oggetto con proprietà come il
    tipo o l'identificatore.
    payload è un nome convenzionale che mi indica come ricevo il parametro
    */
    shoppingCartDispatch({
        type:'ADD_ITEM', 
        payload: id
    })

  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
        type: 'UPDATE_ITEM',

        payload: { productId,
        amount}
    })
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
