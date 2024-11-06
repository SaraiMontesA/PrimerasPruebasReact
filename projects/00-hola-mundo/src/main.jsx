import React from 'react'
import ReactDOM from 'react-dom/client'

// Importamos los estilos
import './assets/index.css'

// Importamos los componentes
import {Button} from './assets/Button'
import {TwitterCard} from './assets/TwitterCard'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Lo que se renderiza en pantalla
root.render(
	<React.Fragment>
		<TwitterCard name="Miguel Ángel Durán" username="@midudev" />
	</React.Fragment>
)
