import React from 'react'
import ReactDOM from 'react-dom/client'
import {Button} from './assets/Button'
import {TwitterCard} from './assets/TwitterCard'


const root = ReactDOM.createRoot(document.getElementById('root'))



// Lo que se renderiza en pantalla
root.render(
  <React.Fragment>
    <Button text="Boton 1" />
    <Button text="Boton 2" />
    <Button text="Boton 3" />
	<TwitterCard name="Jorge" username="jorgeucano" />
  </React.Fragment>
)
