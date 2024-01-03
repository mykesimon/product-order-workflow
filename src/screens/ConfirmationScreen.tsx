import { Link } from 'react-router-dom';

const ConfirmationScreen = () => {
	return (
		<div className='container-card'>
			<h2>Thank you for your purchase!</h2>
			<p>
				Want to place another order? <Link to='/'>Click here</Link>
			</p>
		</div>
	);
};

export default ConfirmationScreen;
