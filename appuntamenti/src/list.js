import React, {useState} from 'react'
import data from './data'
import Person from './person'

const List = () => {
    const [incontri, setIncontri] = useState(data)

    const removeItem = (id) => {
        let newIncontri = incontri.filter(el => el.id !== id)
        setIncontri(newIncontri)
    }
    const reloadAllItem = () => {
        setIncontri(data);
      };
  return (
    <div>
      <h1 className='text-center'>Prossimi incontri </h1>
      <div className=''>
        {
            incontri.map(el => {
               return <Person key={el.id}   {...el} removeItem={removeItem}/>
            })
        }
        </div>
    </div>
  )
}

export default List
