import { FC, useState, useEffect } from 'react';
import Container from '../../components/Container';
import Board from '../../components/Board';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { calcWinner } from '../../utils/calcWinner';
import './game.scss';

const Game: FC = () => {
	const [show, setShow] = useState<boolean>(false);
	const [board, setBoard] = useState<string[]>(Array(9).fill(''));
	const [move, setMove] = useState<boolean>(true);
	const winner: string | null = calcWinner(board);

	useEffect(() => {
		if (!!winner || board.every(box => box !== '')) setShow(true);
	}, board);

	const handleMove = (idx: number): void => {
		const copyBoard: string[] = [...board];

		if (copyBoard[idx] !== '' || winner) return;
		copyBoard[idx] = move ? 'cross' : 'zero';

		setBoard(copyBoard);
		setMove(prev => !prev);
	};

	const restart = (): void => {
		setShow(false);
		setBoard(Array(9).fill(''));
		setMove(true);
	};

	return (
		<section className='game'>
			<Container className='game-container'>
				<Board board={board} handleMove={handleMove} />
			</Container>
			<Modal className='game-modal' show={show} onHide={restart}>
				{winner ? <h4>{winner} winner</h4> : <h4>draw</h4>}
				<Button className='game-play' onClick={restart}>
					Play again
				</Button>
			</Modal>
		</section>
	);
};

export default Game;
