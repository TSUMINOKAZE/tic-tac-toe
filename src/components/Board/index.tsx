import { FC, HTMLAttributes } from 'react';
import cn from 'clsx';
import BoardBox from './BoardBox';
import './board.scss';

interface IBoard extends HTMLAttributes<HTMLDivElement> {
	board: string[];
	handleMove: (idx: number) => void;
}

const Board: FC<IBoard> = ({ board, handleMove, ...props }) => {
	const { className, ...otherProps } = props;

	return (
		<div className={cn('board', { [className as string]: className })} {...otherProps}>
			<div className='board-wrapper'>
				{board.map((box, idx) => (
					<BoardBox key={idx} variant={box} onClick={() => handleMove(idx)} />
				))}
				<>
					<div className='vertical-line'>
						<span></span>
						<span></span>
					</div>
					<div className='horizontal-line'>
						<span></span>
						<span></span>
					</div>
				</>
			</div>
		</div>
	);
};

export default Board;
