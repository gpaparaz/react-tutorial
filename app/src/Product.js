import React from 'react'
const img = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
const Product = () => {
    const prezzo = 14.00;
    const alt = "valore";

    const pStyle = {
        textTransform: 'uppercase'
    }

  return (
    <article>
        <div className="card">
      <img src = {img} alt={alt} />
            <h6>10€ amazon</h6>
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
