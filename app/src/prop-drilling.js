import React, {useState, useContext} from "react";
import  {data} from './data'

/*ordine: maincomponent è padre di elenco che è padre di persona 
come fare per non pssare removePeople da maincomponent a elenco a persona, essenco che in realtà 
mi serve farlo arrivare solo a persona? con useContext 
useContext è un contenitore wrapper in cui impacchettare i nostri componenti, e qui i componenti 
inclusi hanno acceso a tutte el funzioni e state dichiarate dentro questo context. 
quindi devo dichiare il context con una costante chiamata AppContext da convenzione = React.createContext
viene fornito un provider, o consumer. il provider funziona da distributore di info.
quindi devo wrappare tutto ciò che voglio che acceda ad una serie di proprietà o funzioni, tramite AppContext.provider
con appContext tutta l'app può accedere a informazioni 

*/

const AppContext =React.createContext();

const MainComponent = () => {
  const [people, setPeople] = useState(data)
  const removePeople = (id) => setPeople(people.filter(el => el.id !== id))
  return (
    <AppContext.Provider value={{ people, removePeople }}>

    <div>
      <h2>Passaggio di Proprietà a Cascata</h2>
      <Elenco people={people} removePeople={ removePeople}/>
    </div>
    </AppContext.Provider>

  );
};

const Elenco = () => {
  /* mettiamo caso che voglio accedere a people. adesso non mi serve più dichiarare people nel costruttore di elenco 
  ma mi basta usare il context */
  const info = useContext(AppContext);
  return (
    <div>
      {info.people.map((el, index) => {
          return <Persona key={el.id} {...el}/>
      })}
    </div>
  )
} 

const Persona = ({name, id}) => {
  //se qui dentro uso useConteext per accedere a ciò che fa parte dell'appcontext
  //qui faccio una decostruzione del mio oggetto
  const { removePeople } = useContext(AppContext);

  return <article className="item shadow my-5">
    <h5>{name}</h5>
    <button className="button delete-button" onClick={() => removePeople(id)}>x</button>
  </article>
}

export default MainComponent;
