import React from 'react'

const Product = (props) => {

    const pStyle = {
        textTransform: 'uppercase'
    }

    // dichiaro le chiavi, che corrispondono ai valori che voglio estrarre. sto destrutturando props
    const {
        prezzo, nome, img
    }  = props.prodotto;

  return (
    <article>
        <div className="card">
      <img src = {img}  />
            <h5>{nome}</h5>
            <br/>
            <p>2,16 €</p>

        <p className='card-time' style={pStyle}>Riapre presto</p>
        <button>
            {/* con le graffe comunico che voglio cominciare ad usare dello javascript normale */}
            {
                prezzo
            } €
        </button>
        </div>
    </article>
  )
}

export default Product
