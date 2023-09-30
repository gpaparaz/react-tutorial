import React from 'react'

const Person = ({id, nome, stato, img, removeItem}) => {
  return (
    <article className='person'>
      <img src={img} alt="prs" className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn btn-delete" onClick={() => removeItem(id)}>
            Elimina
            
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  )
}

export default Person
