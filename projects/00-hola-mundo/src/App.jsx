import React from 'react'

// Importamos los estilos
import './App.css'

// Importamos los componentes
import {TwitterCard} from './assets/TwitterCard'

// Lo que se renderiza en pantalla
export function App () {
	const format = (userName) => `@${userName}` //OJO que no son comillas simples

	return(
		<React.Fragment>
			<section className='App'>
				<TwitterCard
					formatUserName={format}
					isFollowing={false}
					name="Miguel Ángel Durán"
					userName="midudev"
				/>

				<TwitterCard
					formatUserName={format}
					isFollowing={false}
					name="Pablo Hernandez"
					userName="pheralb"
				/>

				<TwitterCard
					formatUserName={format}
					isFollowing={true}
					name="Elon Musk"
					userName="elonmusk"
				/>
			</section>
		</React.Fragment>
	)
}