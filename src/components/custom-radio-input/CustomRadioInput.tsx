import './style.css';

type CustomRadioInputProps = {
	id: string;
	name: string;
	value: string;
	isChecked: boolean;
	handleChange: (variantId: React.ChangeEvent<HTMLInputElement> | null) => void;
	price?: string;
};

const CustomRadioInput = ({ id, name, value, isChecked, handleChange, price }: CustomRadioInputProps) => {
	return (
		<div className={`custom-input__wrapper${isChecked ? ' is-checked' : ''}`}>
			<div className='custom-input__inner'>
				<input
					type='radio'
					id={id}
					name={name}
					value={value}
					aria-checked={isChecked}
					// NOTE: Currently there is a problem with checked attr inside map on React
					// I have used a aria-checked but this might need to be addressed in a real world
					checked={isChecked}
					onChange={handleChange}
					className='custom-input__input'
					data-testid='custom-radio-id'
				/>
				<label htmlFor={id}>{value}</label>
			</div>
			{price && <span>{price}</span>}
		</div>
	);
};

export default CustomRadioInput;
