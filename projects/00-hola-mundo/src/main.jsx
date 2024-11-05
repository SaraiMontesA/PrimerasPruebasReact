import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Mi primer elemento de React
const Button = ({text}) => {
  return(
    <button>
      {text}
    </button>
  )
}

// Lo que se renderiza en pantalla
root.render(
  <React.Fragment>
    <Button text="Boton 1" />
    <Button text="Boton 2" />
    <Button text="Boton 3" />
    <Button text="Boton 4" />
  </React.Fragment>
)
