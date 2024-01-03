import { render, screen } from '@testing-library/react';

import CustomButton from './CustomButton';
import { AppProvider } from '../../context/AppContext';

describe('Testing <CustomButton> component', () => {
	it('Should render a button with label', () => {
		render(
			<AppProvider>
				<CustomButton
					handleClick={() => {}}
					typeOf='button'
					title='Click Me'
				/>
			</AppProvider>
		);

		const customBtn = screen.getByRole('button');
		expect(customBtn).toBeVisible();
		expect(customBtn).toHaveTextContent(/^Click Me$/);
	});

	it('Should render a submit button', () => {
		render(
			<AppProvider>
				<CustomButton
					handleClick={() => {}}
					typeOf='submit'
					title='Click Me'
				/>
			</AppProvider>
		);

		const customBtn = screen.getByRole('button');
		expect(customBtn).toBeVisible();
		expect(customBtn).toHaveAttribute('type', 'submit');
	});

	it('Should render a disabled button', () => {
		render(
			<AppProvider>
				<CustomButton
					isDisabled={true}
					handleClick={() => {}}
					typeOf='button'
					title='Click Me'
				/>
			</AppProvider>
		);

		const customBtn = screen.getByRole('button');
		expect(customBtn).toBeVisible();
		expect(customBtn).toHaveAttribute('disabled');
	});
});
