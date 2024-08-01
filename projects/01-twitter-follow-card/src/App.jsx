import './App.css';
import TwitterFollowCard from './TwitterFollowCard';

const users = [
	{
		username: 'bsantiagoeg',
		isFollowing: true,
		name: 'santiago espinosa',
	},
	{
		username: 'Pato97espinosa',
		isFollowing: false,
		name: 'Patricio Espinosa',
	},
	{
		username: 'janinaespinosa5',
		isFollowing: false,
		name: 'janina_espinosa',
	},
];

export function App() {
	return (
		<section className='App'>
			{users.map(({ username, name, isFollowing }) => (
				<TwitterFollowCard key={username} userName={username} initialIsFollowing={isFollowing}>
					{name}
				</TwitterFollowCard>
			))}
		</section>
	);
}
