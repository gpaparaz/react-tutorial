import React from 'react'

const Product = (props) => {
    const prezzo = props.prezzo;
    const alt = "valore";
    const nome = props.nome;
    const img = props.img;

    const pStyle = {
        textTransform: 'uppercase'
    }

  return (
    <article>
        <div className="card">
      <img src = {img} alt={alt} />
            <h6>{nome}</h6>
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
