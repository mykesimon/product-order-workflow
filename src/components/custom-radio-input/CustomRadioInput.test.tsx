import { render, screen } from '@testing-library/react';

import CustomRadioInput from './CustomRadioInput';

describe('Testing <CustomRadioInput> component', () => {
	it('should render an input', () => {
		render(
			<CustomRadioInput
				id='test-id'
				name='testers'
				value='Test Input'
				isChecked={false}
				handleChange={() => {}}
			/>
		);

		const inputRadio = screen.getByTestId('custom-radio-id');
		expect(inputRadio).toBeVisible();
	});
});
