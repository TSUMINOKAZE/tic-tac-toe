import { FC, PropsWithChildren, ReactNode, HTMLAttributes } from 'react';
import cn from 'clsx';
import './container.scss';

interface IContainer extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}

const Container: FC<PropsWithChildren<IContainer>> = ({ children, ...props }) => {
	const { className, ...otherProps } = props;

	return (
		<div className={cn('container', { [className as string]: className })} {...otherProps}>
			{children}
		</div>
	);
};

export default Container;
