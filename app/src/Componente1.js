import React from 'react'

const Componente1 = () => {
  return (
    <section>
        <div>
            Hello World
            <Saluto></Saluto>
        </div>
    </section>
  )
}

const Persona = () => {
    return <h2>By Gio</h2>
}

const Messaggio = () => <h4>Sono un messaggio</h4>

const Saluto = () => {
    return (
        <React.Fragment>
            <Persona/>
            <Messaggio/>
        </React.Fragment>
    )
}

export default Componente1
