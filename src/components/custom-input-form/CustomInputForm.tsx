import { useState } from 'react';
import { generateInputId, isEmailValid, isPhoneValid } from '../../utils';

import './style.css';

type CustomInputFormProps = {
	label: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	validate?: () => void;
	required?: boolean;
	placeholder?: string;
};

const CustomInputForm = ({
	label,
	type,
	value,
	onChange,
	required = false,
	placeholder,
}: CustomInputFormProps) => {
	const [error, setError] = useState<string>('');
	const inputId = generateInputId(label);

	const handleValidationInput = (
		inputValue: string,
		type: string,
		isRequired: boolean
	) => {
		// Exit if the input is not required
		if (!isRequired) {
			return;
		}

		// Remove the error if the input has the value
		if (inputValue.replace(/\s/g, '')) {
			setError('');
		}

		// Validation for any input except the email
		if (type !== 'email' && !inputValue.replace(/\s/g, '')) {
			const errorMessage = `${label} is required`;
			setError(errorMessage);
		}

		// Validation for email
		if (type === 'email' && !isEmailValid(inputValue)) {
			const errorMessage = `Invalid ${label}`;
			setError(errorMessage);
		}

		// Validation for phone
		if (type === 'tel' && !isPhoneValid(inputValue)) {
			const errorMessage = `Invalid ${label}`;
			setError(errorMessage);
		}
	};

	return (
		<div className='custom-input'>
			<label
				htmlFor={inputId}
				className='custom-input__label'
				data-testid={`label-${inputId}-id`}
			>
				{label}
				{required && (
					<span
						aria-hidden='true'
						className='custom-input__label-required'
					>
						*
					</span>
				)}
			</label>
			<input
				data-testid={`input-${inputId}-id`}
				id={inputId}
				aria-label={label.toLowerCase()}
				className={`custom-input__input${
					error && ' custom-input__input-error'
				}`}
				type={type}
				value={value}
				onChange={onChange}
				required={required}
				onBlur={() => handleValidationInput(value, type, required)}
				placeholder={placeholder}
			/>
			{error && (
				<div
					role='alert'
					data-testid={`error-${inputId}-id`}
					className='custom-input__error'
				>
					{error}
				</div>
			)}
		</div>
	);
};

export default CustomInputForm;
