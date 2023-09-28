import React from "react";
import useFetch from "./useFetch";

const url = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

const FetchComponents = () => {
  const { data, isLoading } = useFetch(url);
  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <div>
          {data.map((el) => {
            const { id, name, phone } = el;
            return (
              <div key={id} className="users bg-white p-4 shadow rounded">
                <h3>{name}</h3>
                <h5>{phone}</h5>
              </div>
            );
          })}
          <Post />
        </div>
      )}
    </div>
  );
};


/* grazie al fatto che ho inserito il custom hook in una funzione esterna, posso riutilizzarla anche in un altro component
senza dover replicare il codice, e in post gli passo un url diverso rispetto al componente precedente.
qui a riga 47 faccio una destrutturazione di ciò che mi arriva  */



const Post = () => {
  const { data, isLoading } = useFetch(postUrl);
  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <div>
          {data.map((el) => {
            const { id, title, body } = el;
            return (
              <div key={id} className="users bg-white p-4 shadow rounded">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FetchComponents;
