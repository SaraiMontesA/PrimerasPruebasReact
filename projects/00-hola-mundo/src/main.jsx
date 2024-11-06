import React from 'react'
import ReactDOM from 'react-dom/client'

// // Importamos los estilos
// import './assets/index.css'

// Importamos los componentes
import {App} from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Lo que se renderiza en pantalla
root.render(
	<React.Fragment>
		<App />
	</React.Fragment>
)
