// Esto lo exige para las prop validations
import PropTypes from 'prop-types';

// Twitter card
export function TwitterCard ({name, username}) {
	return(
	<article>
		<header>
			<img src="https://unavatar.io/midudev" alt="Avatar" />
			<div>
				<strong>{name}</strong>
				<span>{username}</span>
			</div>
		</header>

		<aside>
			<button>
				Seguir
			</button>
		</aside>
	</article>
	)
}

// Validación de las propiedades
TwitterCard.propTypes = {
	name: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
};
