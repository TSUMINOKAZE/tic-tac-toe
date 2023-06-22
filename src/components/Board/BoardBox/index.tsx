import { FC, HTMLAttributes } from 'react';
import './board-box.scss';

interface IBoardBox extends HTMLAttributes<HTMLDivElement> {
	variant?: string;
}

const BoardBox: FC<IBoardBox> = ({ variant, ...props }) => {
	return (
		<div className='board-box' {...props}>
			<span className={variant}></span>
			<span className='shadow'></span>
		</div>
	);
};

export default BoardBox;
