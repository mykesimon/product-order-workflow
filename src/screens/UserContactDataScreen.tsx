import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

import { PathConstants } from '../routes/pathConstants';
import { CustomButton, CustomInputForm } from '../components';
import { isEmailValid } from '../utils';

const UserContactDataScreen = () => {
	const { userContactData, handleFormChange } = useAppContext();

	const navigate = useNavigate();
	const { userId } = useParams();
	const nextScreen = PathConstants.USER_SUBMITTED_ORDER;

	const isFormValid = () => {
		return (
			userContactData?.firstName &&
			userContactData?.lastName &&
			userContactData?.phone &&
			isEmailValid(userContactData?.email)
		);
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		navigate(`/${userId}/${nextScreen}`);
	};

	return (
		<div className='container-card'>
			<h2>Enter your contact details</h2>
			<form onSubmit={handleSubmit}>
				<CustomInputForm
					label='First Name'
					placeholder='John'
					type='text'
					value={userContactData?.firstName ?? ''}
					onChange={e => handleFormChange('firstName', e.target.value)}
					required
				/>
				<CustomInputForm
					label='Last Name'
					placeholder='Doe'
					type='text'
					value={userContactData?.lastName ?? ''}
					onChange={e => handleFormChange('lastName', e.target.value)}
					required
				/>
				<CustomInputForm
					label='Phone number'
					placeholder='+44 0000 000 00'
					type='tel'
					value={userContactData?.phone ?? ''}
					onChange={e => handleFormChange('phone', e.target.value)}
					required
				/>
				<CustomInputForm
					label='Email address'
					placeholder='john@doe.com'
					type='email'
					value={userContactData?.email ?? ''}
					onChange={e => handleFormChange('email', e.target.value)}
					required
				/>
				<CustomButton
					typeOf='submit'
					title='Next'
					isDisabled={!isFormValid()}
				/>
			</form>
		</div>
	);
};

export default UserContactDataScreen;
