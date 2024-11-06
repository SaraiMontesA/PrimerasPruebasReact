// Esto lo exige para las prop validations
import PropTypes from 'prop-types';

// Twitter card
export function TwitterCard ({name, username}) {
	return(
	<article className='TwitterCard'>
		<header className='TwitterCard-header'>
			<img className='TwitterCard-avatar' src="https://unavatar.io/midudev" alt="Avatar" />
			<div className='TwitterCard-datos'>
				<strong className='TwitterCard-name'>{name}</strong>
				<span className='TwitterCard-username'>{username}</span>
			</div>
		</header>

		<aside>
			<button className='TwitterCard-button'>
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
