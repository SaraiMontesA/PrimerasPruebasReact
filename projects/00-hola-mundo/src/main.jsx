import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Mi primer elemento de React
const createButton = ({text}) => {
  return(
    <button>
      {text}
    </button>
  )
}

// Lo que se renderiza en pantalla
root.render(
  <React.Fragment>
    {createButton({text: 'Boton 1'})}
    {createButton({text: 'Boton 2'})}
    {createButton({text: 'Boton 3'})}
  </React.Fragment>
)
