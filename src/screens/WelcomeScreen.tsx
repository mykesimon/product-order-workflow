import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { PathConstants } from '../routes/pathConstants';
import { CustomButton } from '../components';
import { useAppContext } from '../context/AppContext';
import { useEffect } from 'react';

const WelcomeScreen = () => {
	const { selectedProductCategory, resetStore } = useAppContext();

	const navigate = useNavigate();
	const userId = uuidv4();
	const nextScreen = PathConstants.USER_SELECTED_CATEGORIES;

	// NOTE: Reset store if the user goes back to the home page from anywhere in the process.
	// this depends if we want to keep the state or not.
	useEffect(() => {
		if (selectedProductCategory) {
			resetStore();
		}
	}, []);

	return (
		<div className='container-card'>
			<h1>Welcome to Healthy Shop</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
				architecto sunt distinctio totam quisquam repellendus exercitationem
				fuga consequatur molestiae voluptatibus ipsam.
			</p>
			<CustomButton
				title='Get Started'
				handleClick={() => navigate(`/${userId}/${nextScreen}`)}
			/>
		</div>
	);
};

export default WelcomeScreen;
