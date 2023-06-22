import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import cn from 'clsx';
import './button.scss';

interface IButton extends HTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

const Button: FC<PropsWithChildren<IButton>> = ({ children, ...props }) => {
	const { className, ...otherProps } = props;

	return (
		<button className={cn('btn', 'btn-outline', { [className as string]: className })} type='button' {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
