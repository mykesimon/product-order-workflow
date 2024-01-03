import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';
import { Layout, ErrorBoundary } from './components';

function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			errorElement: <ErrorBoundary />,
			children: routes,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
