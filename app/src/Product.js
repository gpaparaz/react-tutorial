import React from 'react'

const Product = (props) => {

    const pStyle = {
        textTransform: 'uppercase'
    }

    // dichiaro le chiavi, che corrispondono ai valori che voglio estrarre. sto destrutturando props
    const {
        prezzo, nome, img
    }  = props.prodotto;

    const handleClick = () => {
        console.log('hai premuto un bottone')
    }

    const paramsHandler = (prezzo) => {
        console.log(prezzo);
    }
  return (
    <article>
        <div className="card">
      <img src = {img} onClick={handleClick}  />
            <h5>{nome}</h5>
            <br/>
            <p>2,16 €</p>

        <p className='card-time' style={pStyle}>Riapre presto</p>
        <button onClick={() => alert('bottone premuto')}> {prezzo} €</button>
        <button onClick={() => paramsHandler(prezzo)}> args</button>

        </div>
    </article>
  )
}

export default Product
