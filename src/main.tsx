import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import { AppProvider } from './context/AppContext';

import './main.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AppProvider>
				<App />
			</AppProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
