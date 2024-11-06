import React from 'react'

// Importamos los estilos
import './App.css'

// Importamos los componentes
import {TwitterCard} from './assets/TwitterCard'

// Lo que se renderiza en pantalla
export function App () {
	const formatUserName = (userName) => `@${userName}` //OJO que no son comillas simples

	return(
		<React.Fragment>
			<section className='App'>
				<TwitterCard
					formatUserName={formatUserName}
					isFollowing={false}
					name="Miguel Ángel Durán"
					userName="midudev"
				/>

				<TwitterCard
				formatUserName={formatUserName}
				isFollowing={false}
				name="Pablo Hernandez"
				userName="pheralb"
				/>

				<TwitterCard
				formatUserName={formatUserName}
				isFollowing={true}
				name="Elon Musk"
				userName="elonmusk"
				/>
			</section>
		</React.Fragment>
	)
}