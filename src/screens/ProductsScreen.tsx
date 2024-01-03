import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

import { PathConstants } from '../routes/pathConstants';
import { CustomButton, CustomRadioInput } from '../components';
import { formatPriceWithCommas } from '../utils';
import { ProductsData } from '../types';

const ProductsScreen = () => {
	const { selectedProductCategory, handleVariantChange, selectedVariant } =
		useAppContext();

	const productName = selectedProductCategory?.attributes.name;
	const productVariants =
		selectedProductCategory?.relationships.products.data.sort(
			(a: ProductsData, b: ProductsData) => a.name.localeCompare(b.name)
		);
	const defaultVariantId = selectedVariant?.id;

	const navigate = useNavigate();
	const { userId } = useParams();
	const nextScreen = PathConstants.USER_CONTACT_DATA;

	return (
		<div className='container-card'>
			<h2>Select a product for {productName}</h2>
			{productVariants?.map((variant: ProductsData) => {
				const { id, name, cost } = variant;
				return (
					<CustomRadioInput
						key={id}
						id={id}
						name='variants-options'
						value={name}
						isChecked={defaultVariantId === id}
						handleChange={() => handleVariantChange(variant)}
						price={`£${formatPriceWithCommas(cost)}`}
					/>
				);
			})}
			<CustomButton
				title='Next'
				handleClick={() => navigate(`/${userId}/${nextScreen}`)}
			/>
		</div>
	);
};

export default ProductsScreen;
