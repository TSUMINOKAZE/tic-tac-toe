import { FC } from 'react';
import { ReactComponent as SVGLogo } from '../../assets/svg/logo.svg';
import Container from '../Container';
import InfoHover from 'components/InfoHover';
import './navbar.scss';

const NavBar: FC = () => {
	return (
		<header className='navbar'>
			<Container className='navbar-container'>
				<SVGLogo className='navbar-logo' />
				<InfoHover className='navbar-info' description='The Tic Tac Toe game is a game for two players, called "X" and "O", who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal row wins the game.' />
			</Container>
		</header>
	);
};

export default NavBar;
