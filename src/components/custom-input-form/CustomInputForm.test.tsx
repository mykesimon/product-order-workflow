import { render, screen, fireEvent } from '@testing-library/react';

import CustomInputForm from './CustomInputForm';

describe('Testing <CustomInputForm> component', () => {
	it('should have a label with the correct text', () => {
		render(
			<CustomInputForm
				label='Name'
				type='text'
				value='John'
				onChange={() => {}}
			/>
		);

		const inputLabel = screen.getByLabelText('Name');
		expect(inputLabel).toBeVisible();
	});

	it('should have an input text with the right attributes', () => {
		render(
			<CustomInputForm
				label='Name'
				type='text'
				value='John'
				placeholder='Name here'
				onChange={() => {}}
			/>
		);
		const inputText = screen.getByTestId('input-name-id');

		expect(inputText).toBeInTheDocument();
		expect(inputText).toHaveAttribute('type', 'text');
		expect(inputText).toHaveAttribute('value', 'John');
		expect(inputText).toHaveAttribute('placeholder', 'Name here');
	});

	it('should render error message when left empty and required', () => {
		render(
			<CustomInputForm
				label='First name'
				type='text'
				value=''
				placeholder='Name here'
				onChange={() => {}}
				required
			/>
		);

		const inputText = screen.getByTestId('input-first-name-id');
		fireEvent.blur(inputText);
		expect(screen.getByRole('alert')).toBeInTheDocument();
	});
});
