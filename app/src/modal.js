import React from 'react'

const Modal = ({modalContent, modalState, chiudiModal}) => {
  return (
    <div>
      <section className={`modal-section ${modalState ? "show-modal" : ""}`}>
      <div className="container modal-content">
        <h4>{modalContent || "Sono un Modal"}</h4>
        <button className="button delete-button" onClick={chiudiModal}>
          x
        </button>
      </div>
    </section>
    </div>
  )
}

export default Modal
