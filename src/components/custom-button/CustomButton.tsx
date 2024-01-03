import { MouseEventHandler } from 'react';

import './style.css';

type CustomButtonProps = {
	title: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	isDisabled?: boolean;
	typeOf?: 'button' | 'submit' | 'reset';
};

const CustomButton = ({ title, handleClick, isDisabled = false, typeOf = 'button' }: CustomButtonProps) => {
	return (
		<button
			disabled={isDisabled}
			onClick={handleClick}
			type={typeOf}
			className='custom-btn'
		>
			{title}
		</button>
	);
};

export default CustomButton;
