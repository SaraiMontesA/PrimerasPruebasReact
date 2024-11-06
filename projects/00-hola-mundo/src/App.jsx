import React from 'react'

// Importamos los estilos
import './App.css'

// Importamos los componentes
import {TwitterCard} from './assets/TwitterCard'

// Lo que se renderiza en pantalla
export function App () {
	return(
		<React.Fragment>
			<TwitterCard name="Miguel Ángel Durán" userName="midudev" />
			<TwitterCard name="Pablo Hernandez" userName="pheralb" />
			<TwitterCard name="Elon Musk" userName="elonmusk" />
		</React.Fragment>
	)
}