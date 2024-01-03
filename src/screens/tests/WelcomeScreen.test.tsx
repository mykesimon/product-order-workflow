import { render, screen, fireEvent } from '@testing-library/react';

import WelcomeScreen from '../WelcomeScreen';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../../context/AppContext';

describe('Testing <WelcomeScreen> component', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<AppProvider>
					<WelcomeScreen />
				</AppProvider>
			</BrowserRouter>
		);
	});

	it('Render the component with "Welcome to Healthy Shop" heading', () => {
		const titleElement = screen.getByText('Welcome to Healthy Shop');
		expect(titleElement).toBeInTheDocument();
	});

	it('Render the component with "Get Started" button and the user can click', () => {
		const button = screen.getByText('Get Started');
		expect(button).toBeInTheDocument();
		fireEvent.click(button);
	});
});
