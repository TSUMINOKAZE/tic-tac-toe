import { FC } from 'react';
import NavBar from './components/NavBar';
import Game from './pages/Game';

const App: FC = () => {
	return (
		<>
			<NavBar />
			<main>
				<Game />
			</main>
		</>
	);
};

export default App;
