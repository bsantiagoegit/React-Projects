import { useState } from 'react';

function TwitterFollowCard({ children, userName, initialIsFollowing }) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

	const handleClick = () => {
		setIsFollowing(!isFollowing);
	};

	const buttonText = !isFollowing ? 'Follow' : 'Following';
	const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

	return (
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img alt='User avatar' className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} />
				<div className='tw-followCard-info'>
					<strong>{children}</strong>
					<span className='tw-followCard-infoUsername'>@{userName}</span>
				</div>
			</header>
			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					<span className='tw-followCard-text'>{buttonText}</span>
					<span className='tw-followCard-stopFollow'>Stop Following</span>
				</button>
			</aside>
		</article>
	);
}

export default TwitterFollowCard;
