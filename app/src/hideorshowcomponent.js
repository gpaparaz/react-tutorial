import React, { useEffect, useState } from 'react'

const Hideorshowcomponent = () => {
    const [show, setShow] = useState(false);

  return (
    <div className='card shadow mt-5'>
      <button onClick={() =>setShow(!show)}>
        {
            show ? 'nascondi' : 'mostra'
        }
      </button>
      {show && <Elemento/>}
    </div>
  )
}

const Elemento = () => {
    const [contatore, setContatore] = useState(0);

    useEffect(()=> {
        const timer = setTimeout(() => {
            setContatore(oldValue => oldValue +1)
        }, 1000);
        return () => clearTimeout(timer)
    },[contatore])
    
    return (
        <div>
            <h2>{contatore}</h2>
        </div>
    )
}
// qualora muti lo state devo pulire il mio contatore e bloccare il timeout
export default Hideorshowcomponent
