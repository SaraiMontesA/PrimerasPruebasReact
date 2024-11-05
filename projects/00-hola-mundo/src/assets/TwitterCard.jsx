// Esto lo exige para las prop validations
import PropTypes from 'prop-types';

// Twitter card
export function TwitterCard ({name, username}) {
	return(
	<article>
		<header>
			<h1>{name}</h1>
			<h2>{username}</h2>
		</header>
	</article>
	)
}

// Validación de las propiedades
TwitterCard.propTypes = {
	name: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
};
