import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

import { PathConstants } from '../routes/pathConstants';
import { CustomButton, CustomRadioInput } from '../components';
import { ProductCategory } from '../types';
import { useFetchCategories } from '../hooks/useFetchCategories';

const CategoriesScreen = () => {
	// NOTE: I'm Using React Query to make one request every 2 minutes from when the component mounted
	// and using cached value for better performance
	// I choose 2 minutes because this type of data is unlikely to change very often
	// However, if refreshed the API will make another call
	const { isError, isSuccess, isLoading, productCategories, error } =
		useFetchCategories();

	const { selectedProductCategory, handleCategoryChange } = useAppContext();

	const navigate = useNavigate();
	const { userId } = useParams();
	const nextScreen = PathConstants.USER_SELECTED_PRODUCTS;

	if (isError && error instanceof Error) {
		return (
			<div className='container-card'>
				<h3>Oops, something went wrong. Please try again.</h3>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className='container-card'>
				<h3>Loading...</h3>
			</div>
		);
	}

	return (
		<div className='container-card'>
			<h2>Select a category</h2>

			{isSuccess && (
				<>
					{productCategories.map((category: ProductCategory) => (
						<CustomRadioInput
							key={category.id}
							id={category.id}
							name='product-options'
							value={category.attributes.name}
							isChecked={
								selectedProductCategory?.attributes.name ===
								category.attributes.name
							}
							handleChange={() => handleCategoryChange(category)}
						/>
					))}
				</>
			)}

			<CustomButton
				title='Next'
				handleClick={() => navigate(`/${userId}/${nextScreen}`)}
				isDisabled={!selectedProductCategory}
			/>
		</div>
	);
};

export default CategoriesScreen;
