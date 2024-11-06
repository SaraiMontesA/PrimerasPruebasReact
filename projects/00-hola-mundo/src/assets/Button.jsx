
// Esto lo exige para las prop validations
import PropTypes from 'prop-types';

// Mi primer elemento de React
export function Button ({text}) {
	return(
	<button className='Button'>{text}</button>
	)
}

// Validación de las propiedades
Button.propTypes = {
	text: PropTypes.string.isRequired,
};