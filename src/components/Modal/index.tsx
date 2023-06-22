import { HTMLAttributes, PropsWithChildren, ReactNode, FC } from 'react';
import cn from 'clsx';
import './modal.scss';

interface IModal extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	show?: boolean;
	onHide?: () => void;
}

const Modal: FC<PropsWithChildren<IModal>> = ({ children, show, onHide, ...props }) => {
	const { className, ...otherProps } = props;

	return (
		<>
			{show && (
				<>
					<div className={cn('modal', { [className as string]: className })} {...otherProps}>
						<button className='modal-close' type='button' onClick={onHide}></button>
						{children}
					</div>
					<div className='modal-backdrop' onClick={onHide}></div>
				</>
			)}
		</>
	);
};

export default Modal;
