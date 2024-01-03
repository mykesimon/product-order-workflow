import { Outlet } from 'react-router-dom';
import { Header } from '..';

import './style.css';

const Layout = () => {
	return (
		<>
			<Header />
			<main className='layout'>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
