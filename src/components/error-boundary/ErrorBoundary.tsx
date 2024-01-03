import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

import './style.css';

const ErrorBoundary = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return (
				<div className='error-page'>
					<h1>404 Page Not Found.</h1>
					<p>Looks like this page does not exist.</p>
					<p>
						Try to go back to the <Link to='/'>Homepage</Link>
					</p>
				</div>
			);
		}

		if (error.status === 401) {
			return (
				<div className='error-page'>
					<h1>You aren't authorized to see this</h1>
				</div>
			);
		}

		if (error.status === 503) {
			return (
				<div className='error-page'>
					<h1>Looks like our API is down</h1>
				</div>
			);
		}

		if (error.status === 418) {
			return (
				<div className='error-page'>
					<h1>🫖</h1>
				</div>
			);
		}
	}

	return (
		<div className='error-page'>
			<h1>Something went wrong</h1>
			<p>
				Try to go back to the <Link to='/'>Homepage</Link>
			</p>
		</div>
	);
};

export default ErrorBoundary;
