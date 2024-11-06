// Esto lo exige para las prop validations
import PropTypes from 'prop-types';

// Twitter card
export function TwitterCard ({name, userName, isFollowing}) { 
	const imageSrc = `https://unavatar.io/${userName}`
	return(
	<article className='TwitterCard'>
		<header className='TwitterCard-header'>
			<img
				className='TwitterCard-avatar'
				alt="Avatar"
				src={imageSrc}
			/>
			<div className='TwitterCard-info'>
				<strong className='TwitterCard-name'>{name}</strong>
				<span className='TwitterCard-username'>{userName}</span>
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
