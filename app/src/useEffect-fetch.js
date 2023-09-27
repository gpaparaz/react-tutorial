import React, { useEffect, useState } from 'react'
import axios from 'axios';


const url = 'https://api.github.com/users';
const FetchData = () => {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        const response = await axios.get(url);
        setUsers(response.data);
    }

    //tramite l'array vuoto finale vado ad indicare che useEffect deve essere eseguito slo una volta, altrimenti andrebbe ad eseguirlo in loop 
    useEffect(()=> {
        getData();
    },[]);
  return (
    <div>
      <h1>Fetch component</h1>
      <ul>
        {users.map((el => {
            const {login, id, avatar_url:img, html_url} = el;
            return <li key={id}>
                <img  src={img} alt={login}/>
                <h5>{login}</h5>
            </li>
        }))}
      </ul>
    </div>
  )
}

export default FetchData
