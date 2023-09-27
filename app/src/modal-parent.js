import React, { useReducer, useState } from 'react'
import Modal from './modal'

//definisco lo state iniziale
const initialState = {
    isModalOpen: false,
    modalContent: 'Eccomi sono un modale'
}


//questa funzione solitamente si importerebbe da un altro file
//si prende in carico le azioni necessarie a cambiare il nostro state
const reducer = (state, action) => {
    if(action.type === 'PREMO_BOTTONE')
        console.log('bottone premuto')
    if(action.type === 'APRI_MODAL'){
        console.log(action)
        return  {
            // prima copio tutte le proprietà e poi modifico quelle che mi interessano
            ...state,
            isModalOpen: true,
            modalContent: action.payload
        }
    }

    if(action.type === 'CHIUDI_MODAL'){
        return  {
            // prima copio tutte le proprietà e poi modifico quelle che mi interessano
            ...state,
            isModalOpen: false
        }
    }
    return state;
}

const ModalParent = () => {
    //questi due valori sono nomenclature di convenzione coinvolte con useReducer
    //dispatch delega a una funzione esterna il compito di modificare il nostro state 
    const [state, dispatch] = useReducer(reducer, initialState)

    //queste due funzioni sono state sostituite dall initialState
    // const [isModalOpen, setIsModalOpen] = useState(false)
    // const [modalContent, setModalContent] = useState("Eccomi sono un modal")

    // const openModal = () => {
    //     setIsModalOpen(!isModalOpen)
    // }

    //con type descrivo cosa fa questa funzione. dobbiamo SEMPRE ritonare il nostro state
    const tiPremo = () => {
        dispatch({type:'PREMO_BOTTONE'})
    }

    const apriModal = () => {
        dispatch({type:'APRI_MODAL', payload:'messaggio personalizzato'})
    }

    const chiudiModal = () => {
        dispatch({ type: 'CHIUDI_MODAL' });
      };

  return (
    <div>
      <h2>Use Reducer Component</h2>
      <h3>premi qui per aprire il modale</h3>
      <button className='button' onClick={apriModal}>click me </button>
      <Modal
      modalContent={state.modalContent}
      modalState={state.isModalOpen}
      openModal={chiudiModal} />
    </div> 
  )
}

export default ModalParent
