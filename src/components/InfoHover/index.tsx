import { FC, HTMLAttributes } from 'react';
import cn from 'clsx';
import { ReactComponent as SVGInfo } from '../../assets/svg/info.svg';
import './info-hover.scss';

interface IInfoHover extends HTMLAttributes<HTMLDivElement> {
	description: string;
}

const InfoHover: FC<IInfoHover> = ({ description, ...props }) => {
	const { className, ...otherProps } = props;

	return (
		<div className={cn('info-hover', { [className as string]: className })} {...otherProps}>
			<SVGInfo />
			<span>{description}</span>
		</div>
	);
};

export default InfoHover;
