import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { PathConstants } from '../routes/pathConstants';

import { CustomButton } from '../components';
import { formatPriceWithCommas } from '../utils';

import { UserFormData } from '../types';

const ReviewAndPayScreen = () => {
	const { selectedProductCategory, selectedVariant, userContactData } =
		useAppContext();

	const productCategory = selectedProductCategory?.attributes.name;
	const productVariant = selectedVariant?.name;
	const productVariantCost = selectedVariant?.cost;
	const { firstName, lastName, phone, email } = userContactData as UserFormData;

	const navigate = useNavigate();
	const { userId } = useParams();
	const nextScreen = PathConstants.USER_CONFIRMATION;

	return (
		<div className='container-card'>
			<h2>Review and Pay</h2>
			<p>Check your items and contact details are correct</p>
			<div className='product-details'>
				<h3>Order Summary</h3>
				<div className='white-card'>
					<div className='product-summary-inline'>
						<h4>
							{productCategory}: {productVariant}
						</h4>
						<span>{`£${formatPriceWithCommas(
							productVariantCost as string
						)}`}</span>
					</div>
				</div>
			</div>
			<div className='user-details'>
				<h3>Contact details</h3>
				<div className='white-card'>
					<div className='contact-summary-inline'>
						<span className='contact-summary-inline__label'>First name:</span>
						<span>{firstName}</span>
					</div>
					<div className='contact-summary-inline'>
						<span className='contact-summary-inline__label'>Last name:</span>
						<span>{lastName}</span>
					</div>
					<div className='contact-summary-inline'>
						<span className='contact-summary-inline__label'>Phone number:</span>
						<span>{phone}</span>
					</div>
					<div className='contact-summary-inline'>
						<span className='contact-summary-inline__label'>
							Email address:
						</span>
						<span>{email}</span>
					</div>
				</div>
			</div>
			<CustomButton
				title='Pay Now'
				handleClick={() => navigate(`/${userId}/${nextScreen}`)}
			/>
		</div>
	);
};

export default ReviewAndPayScreen;
