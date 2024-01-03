import { Link } from 'react-router-dom';

import './style.css';

const Header = () => {
	return (
		<div className='header'>
			<Link to='/'>My App</Link>
		</div>
	);
};

export default Header;
